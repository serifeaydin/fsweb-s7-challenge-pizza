import React from "react";
import Logo from "../assets/logo.svg";
import { useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const { orderData ,selectionTotal, total } = location.state;

  return (
    <div className="last-page">
      <div className="order">
      <img src={Logo} alt="Logo" />
      <p>lezzetin yolda</p>
      <h1>SİPARİŞ ALINDI</h1>
      </div>
      <div className="order-summary">
      <h4>{orderData.name}</h4>
      <p>Boyut:{orderData.size}</p>
      <p>Hamur: {orderData.dough}</p>
      <p>Ek Malzemeler: {orderData.ingredients.join(", ")}</p>
      </div>
      <div className="price">
        <p>Sipariş Toplamı</p>
      <p>Seçimler: {selectionTotal} TL</p>
      <p>Toplam: {total} TL</p>
      </div>
    </div>
  );
}

export default Success;