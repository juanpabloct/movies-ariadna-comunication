import { FC } from "react"
import "./button.scss"
interface buttonProp {
    title: string
    className: "watch_now" | "more_info" | "more_info_target"
    action: () => void
}
export const Button: FC<buttonProp> = ({ action, className, title }) => {
    return <button className={className} onClick={action}>{title}</button>
}