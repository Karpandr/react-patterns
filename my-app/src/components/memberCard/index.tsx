import "./style.scss";

import { UserProps } from "./types";
import { CardInfo } from "./parts/cardInfo";

export const MemberCard = ({ name, ...rest }: UserProps) => {
    return (
        <div className="member-card">
            <p className="member-card__title">{name}</p>
            <CardInfo {...rest} />
        </div>
    );
};