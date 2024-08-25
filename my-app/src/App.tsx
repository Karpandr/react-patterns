import "./App.scss";
import { MemberCard } from "../src/components/memberCard";
import { useEffect, useState } from "react";
import { UserProps } from "./components/memberCard/types";
import { ButtonWithLabel } from "./components/buttonWithLabel";
import Form from "./components/form";
import { Tabs } from "./components/tabs";

export default function App() {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [moreUsers, setMoreUsers] = useState<UserProps[]>([]);
    const [addedUser, setAddedUser] = useState<UserProps | null>(null);
    const [tabForm, setTabForm] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((res) => setUsers(res));
    }, []);

    const onButtonClick = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((res) => setMoreUsers(res));
    };

    const handleUserAddition = (user: UserProps) => {
        setAddedUser(user);
    };

    return (
        <div className="App">
            <Tabs onChange={setTabForm}/>
            {tabForm
                ? <Form onUserAddition={handleUserAddition} /> 
                : <>
                    {[...users, ...moreUsers].map(user => <MemberCard {...user} />)}
                    <ButtonWithLabel onClick={onButtonClick}>more users</ButtonWithLabel>
                </>
            }
            {addedUser && (
                <MemberCard {...addedUser} />
            )}
        </div>
    );
}