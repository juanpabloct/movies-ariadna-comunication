import { FC } from "react"
import { Button } from "../nav/buttons/button"
import "./target.scss"
export const Target: FC<{ img: string, alt: string, title: string }> = ({ img, alt, title }) => {
    return <div className="cotent_image">
        <img src={img} alt={alt} />
        <div className="view_buttons">
            <h3>{title.toUpperCase()}</h3>
            <div className="content_button">
                <Button action={() => { console.log("") }} className="watch_now" title="WATCH NOW" />
                <Button action={() => { console.log("") }} className="more_info_target" title="MORE INFO" />
            </div>
        </div>
    </div>
}