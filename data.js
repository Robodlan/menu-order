import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
export const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        //    ingredients: ["beef", "cheese", "lettuce"],
        id: 0,
        price: 14,
        emoji: "🍕",
        isLiked: false,
        quantity: 0
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1,
        isLiked: false,
        quantity: 0
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2,
        isLiked: false,
        quantity: 0
    }
]