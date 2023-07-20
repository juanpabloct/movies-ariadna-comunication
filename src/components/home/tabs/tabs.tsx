import { FC, ReactNode, useState } from "react"
import "./tabs.scss"
import { TbTriangleInvertedFilled } from "react-icons/tb"
interface tabProp { element: ReactNode, title: string }
export const Tabs: FC<{ children: tabProp[] }> = ({ children }) => {
    const [tab, setTab] = useState(0)
    return (
        <div className="tab_container">
            <div className="tabs">
                {
                    children.map(({ title }, i) => {
                        return (
                            <div className="title_tab">
                                <strong onClick={() => setTab(i)}>{title}</strong>
                                {
                                    i === tab && (

                                        <p>
                                            <TbTriangleInvertedFilled />
                                        </p>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
            {children[tab].element}
        </div>)
}