import logoIcon from "../../assets/logo.png";
import "./header.scss";
import { Link, useLocation } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { LegacyRef, useRef, useState } from "react";

export function Header() {
    const routeNow = useLocation().pathname
    const LinkWithStyle = ({ to, title }: { to: string, title: string }) => <Link className={routeNow === to ? "pageNow" : ""} to={to}>{title}</Link>
    const [showMenu, setShowMenu] = useState(false)
    const refDirections: LegacyRef<HTMLDivElement> = useRef(null)
    return (
        <header className="header">
            <section className="container_logo">
                <img src={logoIcon} alt="logo" className="logo" />
            </section>
            <section className="sections">
                <div onClick={() => { setShowMenu(current => !current) }} className="iconMenu">
                    <AiOutlineMenu />
                </div>
                <div ref={refDirections} className="directions" id={!showMenu ? "hidden" : ""}>
                    <LinkWithStyle title="HOME" to="/" />
                    <LinkWithStyle title="CATEGORIES" to="/categories" />
                    <LinkWithStyle title="MY FAVORITES" to="/favorites" />
                    <Link className="sing_in" to={"/"}>SING IN</Link>
                </div>
            </section>
        </header>
    );
}

