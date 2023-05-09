import Vegpizza from '../../Assets/veg.jpg';
import Nonvegpizza from '../../Assets/non_veg.webp';
import cooldrink from '../../Assets/cooldrink.jpg';
import cake from '../../Assets/cake.jpg';

const VegetarianList = [
    {
        name:"Deluxe Veggie",
        image:Vegpizza,
        price:{
            Regular:150,
            Medium:200,
            Large:325
        }
    },
    {
        name:"Cheese and corn",
        image:Vegpizza,
        price:{
            Regular:175,
            Medium:375,
            Large:475
        }
    },
    {
        name:"Paneer Tikka",
        image:Vegpizza,
        price:{
            Regular:160,
            Medium:290,
            Large:340
        }
    },
]

 const NonVegetarianList = [
    {
        name:"Non-Veg Supreme",
        image:Nonvegpizza,
        price:{
            Regular:190,
            Medium:325,
            Large:425
        }
    },
    {
        name:"Chicken Tikka",
        image:Nonvegpizza,
        price:{
            Regular:210,
            Medium:370,
            Large:500
        }
    },
    {
        name:"Peppar Barbecue Chicken",
        image:Nonvegpizza,
        price:{
            Regular:220,
            Medium:380,
            Large:525
        }
    },
]

const vegToppings = [
    {
        name:"Black olive",
        price:20
    },
    {
        name:"Capsicum",
        price:25
    },
    {
        name:"Paneer",
        price:35
    },
    {
        name:"Mushroom",
        price:30
    },
    {
        name:"Fresh Tomato",
        price:10
    },
]

const NonVegToppings = [
    {
        name:"Chicken tikka",
        price:35
    },
    {
        name:"Barbeque chicken",
        price:45
    },
    {
        name:"Grilled chiclen",
        price:40
    },
]

const sides=[
    {
        name:"Cold drink",
        image:cooldrink,
        price:55
    },
    {
        name:"Mousse Cake",
        image:cake,
        price:90
    }
]

const crusts = ["New hand tossed","Wheat thin crust","Cheese Burst","Fresh pan pizza"]
export  {
    VegetarianList,
    NonVegetarianList,
    vegToppings,
    NonVegToppings,
    sides,
    crusts
}

