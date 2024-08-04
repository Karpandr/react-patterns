import "../style.scss";

import { UserProps } from "../types";

export const CardInfo = ({ phone, username, website }: UserProps) => {
    return (
        <div className="member-card__info">
            <p className="member-card__list-item">Username: {username}</p>
            <p className="member-card__list-item">Phone: {phone}</p>
            <p className="member-card__list-item">Website: {website}</p>
        </div>
    );
};