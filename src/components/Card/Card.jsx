import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import "./Card.css"

const Card = ({ food, onAdd, onRemove, }) => {
    const [count, setCount] = useState(0)
    const { title, Image, price, } = food

    const PlusCount = () => {
        setCount(count + 1)
        onAdd(food)
    }

    const MinusCount = () => {
        setCount(count - 1)
        onRemove(food)
    }

    return (
        <div className="card">
            <span className={`${count !== 0 ? "card_badge" : "card_hidden"}`}>{count}</span>

            <div className="image_container">
                <img src={Image} alt={title} />
            </div>
            <div className="card_title">
                {title} <span className="card_price">{price} рублей</span>
            </div>
            <div className={"card_button"}>
                <Button title={"+"} type={"add"} onClick={PlusCount} />
                {count !== 0 ? (
                    <Button title={"-"} type={"remove"} onClick={MinusCount} />
                ) : (
                    ""
                )}
            </div>

        </div>
    )
}

export default Card


