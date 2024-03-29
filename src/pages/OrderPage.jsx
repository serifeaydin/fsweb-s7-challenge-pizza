import React from "react";
import Logo from "../assets/logo.svg";
import FormBanner from "../assets/form-banner.png";
import { Link } from "react-router-dom";
import Order from "../components/Order";
import Footer from "../components/Footer";

function OrderPage({ location }) {
 
  const selectedFood = location && location.state ? location.state.selectedFood : null;

  return (
    <section>
      <div>
        <div className="logo-footer">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="form-banner">
          <img src={FormBanner} alt="Form Banner" />
        </div>
        <div className="order-navbar">
          <Link className="order-navbar-link" to="/HomePage">Ana Sayfa</Link>
          <Link className="order-navbar-link" to="/Secenekler">- Seçenekler -</Link>
          <Link className="order-navbar-link" to="/OrderPage">Sipariş Oluştur</Link>
        </div>
        {selectedFood && ( 
          <div>
            <h1>{selectedFood.isim}</h1>
            <p>{selectedFood.aciklama}</p>
          </div>
        )}
      </div>
      <div>
        <Order />
        <Footer />
      </div>
    </section>
  );
}
export default OrderPage;