import { FC } from "react"
import { Target } from "../targets/target"
import "./contenTarget.scss"
export interface Movie {
    image: string;
    title: string;
}
export const ContentTargets: FC<{ movies: Movie[] }> = ({ movies }) => {
    return (

        <div className="content">
            <div className="content_target">
                {

                    movies.map(({ image, title }, i) => {
                        return (
                            <Target title={title} img={image} alt={title} key={i} />
                        )
                    })
                }
            </div>
        </div>)
}

