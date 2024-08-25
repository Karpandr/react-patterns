import "./style.scss";

import { Button } from "../button";
import { ButtonWithLabelProps } from "./types";

export const ButtonWithLabel = ({ onClick, children }: ButtonWithLabelProps) => {
    return (
        <div className="button-with-label">
            <p className="button-with-label__label">
                нажми меня!
            </p>
            <Button onClick={onClick}>
                {children}
            </Button>
        </div>
    );
};