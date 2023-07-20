import { Button } from "./buttons/button";
import "./nav.scss";
import bannerNav from "../../../assets/movies/allbanners.json";
import { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa"
import { BiSolidCircle } from "react-icons/bi"
export const Nav = () => {
    const [bannerShow, setBannerShow] = useState(0);
    //const [image, setImage] = useState(bannerNav.movies[0]);

    const changeBanner = () => {
        setBannerShow(current => (current >= bannerNav.movies.length - 1 ? 0 : current + 1));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            changeBanner()
        }, 4000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const image = bannerNav.movies[bannerShow]

    return (
        <nav className="nav">
            <picture key={image.title}>
                <source srcSet={image.image} media="(min-width: 1200px)" />
                <source srcSet={image.imageMob} media="(min-width: 768px)" />
                <img src={image.imageMob} alt="Descripción de la imagen" />
            </picture>
            <div className="content_info">

                <div className="info">
                    <strong className="title">{image.title.toUpperCase()}</strong>
                    <div className="description">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veniam nihil officia, cumque repellat recusandae tempora rerum laborum debitis labore quidem ratione temporibus architecto aliquid repudiandae voluptatum eveniet, illum quia.</p>
                        <div className="content_buttons">
                            <Button action={() => { console.log("") }} className="watch_now" title="WATCH NOW" />
                            <Button action={() => { console.log("") }} className="more_info" title="MORE INFO" />
                        </div>
                    </div>
                </div>
                <div className="pounts_images">{bannerNav.movies.map((_, i) => {
                    return bannerShow === i ? <span className={"pount_selected"} key={i}><FaRegDotCircle /></span> : <span className="pount" onClick={() => { setBannerShow(i) }} key={i}><BiSolidCircle /></span>
                })}</div>
            </div>
        </nav>
    );
};
