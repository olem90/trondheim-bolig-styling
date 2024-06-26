import { NavLink } from "react-router-dom";
import { NavStyle, LogoStyle } from "./Nav.style";
import logo from "../../images/tbs-logo.png"

export const Nav = ({ scrollToAboutUs, scrollToContact, scrollToGallery, scrollToPriser }) => {
    return (
        <NavStyle>
            <LogoStyle>
                <img className="logo" src={logo}></img> 
            </LogoStyle>
            <div className="navLinks">
                <NavLink onClick={scrollToPriser} className="priser-link">Priser</NavLink>
                <NavLink onClick={scrollToAboutUs} className="om-oss-link">Om Oss</NavLink>
                <NavLink onClick={scrollToContact} className="kontakt-oss-link">Kontakt Oss</NavLink>   
                <NavLink onClick={scrollToGallery} className="gallery-link">Galleri</NavLink>     
            </div> 
        </NavStyle>  
    ) 
} 