import React from "react";
import { Link } from "react-router-dom";
import imageUrl from "../assets/img/empty-cart.png";
import { HOME_LOCATION } from "../constants/homeLocation";

export const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Кошик порожній <span>😕</span>
      </h2>
      <p>
        Найімовірніше, ви не замовляли ще піцу.
        <br />
        Щоб замовити піцу, перейди на головну сторінку.
      </p>
      <img src={imageUrl} alt="Empty cart" />
      <Link to={HOME_LOCATION} className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};
