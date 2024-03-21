import React from "react";
import Logo from "../assets/logo.svg";


function Navbar(){
    return(
        <div>
           <div>{<Logo/>}</div>
           <Link to="/">Ana Sayfa</Link>
           <Link to="/">Seçenekler</Link>
           <Link to="/">Sipariş Oluştur</Link>
            
            </div>
    );

}
export default Navbar;