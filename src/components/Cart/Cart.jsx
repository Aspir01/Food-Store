import React from "react";
import "./Cart.css"
import Button from "../Button/Button";

const Cart = ({ cartItems }) => {

    let totalPrice = cartItems.reduce((a, c) => a + c.price * c.score, 0)
    return (
        <div className="cart_container">
            <br /> <span>Общая цена: {totalPrice.toFixed(2)} рублей</span>
            <Button
                title={`${cartItems.length === 0 ? "" : "Заказать"} `}
                type={cartItems.length === 0 ? "hidden" : "checkout"}
                disable={cartItems.length === 0 ? true : false}
            />
        </div>
    )
}

export default Cart;