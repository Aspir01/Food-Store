import React from "react";
import "./Cart.css"
import Button from "../Button/Button";

const Cart = ({ cartItems, onAdd, onRemove }) => {

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.score, 0)

    return (
        <div className="cart_container">
            <br /> <span className="">Общая цена: {totalPrice.toFixed(2)} рублей</span>
            <Button
                title={`${cartItems.length === 0 ? "Заказать" : "Заказать"} `}
                type={"checkout"}
                disable={cartItems.length === 0 ? true : false}
            />
        </div>
    )
}

export default Cart;