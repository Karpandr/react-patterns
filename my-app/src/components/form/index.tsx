import "./style.scss";

import { useState, FormEvent, ChangeEvent } from "react";
import { FormProps } from "./types";

const Form = ({ onUserAddition }: FormProps) => {
    const [username, setUsername] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [website, setWebsite] = useState<string>('');

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handlewebsiteChange = (event: ChangeEvent<HTMLInputElement>) => {
        setWebsite(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                phone,
                website,
            }),
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
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input type="text" value={phone} onChange={handlePhoneChange} />
                </label>
            </div>
            <div>
                <label>
                    Website:
                    <input type="email" value={website} onChange={handlewebsiteChange} />
                </label>
            </div>
            <button className="form-container__button" type="submit">Submit</button>
        </form>
    );
};

export default Form;