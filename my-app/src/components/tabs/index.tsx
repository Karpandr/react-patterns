import "./style.scss";

import { Button } from "../button";
import { TabsProps } from "./types";

export const Tabs = ({ onChange }: TabsProps) => {
    return (
        <div className="tabs">
            <Button onClick={() => onChange(true)}>form</Button>
            <Button onClick={() => onChange(false)}>users</Button>
        </div>
    );
};