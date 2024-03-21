import React from "react";
import Background from '../assets/home-banner.png';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
function Home(){
    return(
        <div className="home"   style={{
            backgroundImage: `url(${Background})`,
          }}>
        <img classname="logo"src={Logo}/>
        <p className="slogan">fırsatı kaçırma</p>
        <p className="text">KOD ACIKTIRIR <br/> PİZZA,DOYURUR</p>
        <Link className="buton" to="/">ACIKTIM</Link>
        </div>
    )
}
export default Home;