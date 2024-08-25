import "./style.scss";

import { useState, FormEvent, ChangeEvent } from "react";
import { FormProps } from "./types";
import { UserProps } from "../memberCard/types";
import { nameof } from "../../utils";

const Form = ({ onUserAddition }: FormProps) => {
    const [user, setUser] = useState<UserProps>({
        username: '',
        phone: '',
        website: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(prev => ({ 
            ...prev, 
            [e.target.name]: e.target.value 
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((user) => onUserAddition(user));
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label>
                    Username:
                    <input type="text" name={nameof<UserProps>("username")} value={user.username} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input type="text" name={nameof<UserProps>("phone")} value={user.phone} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Website:
                    <input type="text" name={nameof<UserProps>("website")} value={user.website} onChange={handleChange} />
                </label>
            </div>
            <button className="form-container__button" type="submit">Submit</button>
        </form>
    );
};

export default Form;