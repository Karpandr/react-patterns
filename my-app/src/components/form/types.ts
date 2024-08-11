import { UserProps } from "../memberCard/types";

export interface FormProps {
    onUserAddition: (user: UserProps) => void; // Принимаем функцию для обновления состояния верхнего компонента
}