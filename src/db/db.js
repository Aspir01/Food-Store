import burger from "../images/burger1.png"
import icecream from "../images/IceCream.png"
import pizza from "../images/pizza.png"
import salad from "../images/salad.png"
import coffee from "../images/coffee.png"
import fri from "../images/fries.png"

export function getData() {
    return [
        { title: "Бургер", price: 100, Image: burger, id: "a" },
        { title: "Мороженое", price: 50, Image: icecream, id: "b" },
        { title: "Кофе", price: 75, Image: coffee, id: "c" },
        { title: "Пицца", price: 400, Image: pizza, id: "d" },
        { title: "Салат", price: 120, Image: salad, id: "e" },
        { title: "Картошка фри", price: 90, Image: fri, id: "f" },
    ]
}