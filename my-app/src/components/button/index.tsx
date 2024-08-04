import "./style.scss";

import { ButtonProps } from "./types";

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};