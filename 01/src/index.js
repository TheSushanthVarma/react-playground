import React from "react";
import ReactDom from "react-dom/client"
import './index.css';
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
function App(){

    return (
    <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
          </div>
);}

function Header() {
    // const style={color: "red", fontSize: "48px", textTransform:"uppercase"};
    const style={};

    return (
        <header className="header">
    <h1 style={style} > The Big Pizza Co.</h1>
    </header>)
}

function Menu() {
    return(
        <main className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
        {pizzaData.map( pizza => <Pizza pizzaObject={pizza} key={pizza.name} />)}

          {/* {pizzaData.map(pizza => 
          <Pizza name={pizza.name} 
          ingredients = {pizza.ingredients} 
          price = {pizza.price}
          photoName = {pizza.photoName} 
            /> )}
          */}
        
        </ul>

        {/* <Pizza 

        
          // name = "pizza salamino"
          // ingredients = "Tomato, mozarella, ham, aragula, and burrata cheese"
          // photoName="pizzas/salamino.jpg"
          // price="10"/>
          // <Pizza 
          // name ="Pizza Funghi"
          // ingredients = "Tomato, mozarella, mushrooms, and onion"
          // price = "12"
          // photoName = "pizzas/funghi.jpg"
          /> */}

        </main>
    )
}   

function Pizza({pizzaObject}){ //props object

    return (
    <li className={`pizza ${pizzaObject.soldOut? "sold-out":""}`}>
    <img src={pizzaObject.photoName} alt={pizzaObject.photoName} />
      <div>
        <h3>{pizzaObject.name}</h3> 
        <p>{pizzaObject.ingredients}</p>
        <span className="price">{ pizzaObject.soldOut? "SOLD OUT":pizzaObject.price}</span>
      </div>
    </li>
    );
}



function Footer() {
    const hour = new Date().getHours()
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)
    // if(hour >= openHour && hour <= closeHour) alert ("we're currently open!");
    // else alert ("sorry we're closed");
    // console.log(hour)
    // We're currently open
    return (
    <footer className="footer"> {
      <Order openHour={openHour} closeHour={closeHour} isOpen={isOpen}/>

    }</footer>)
}
function Order({openHour,closeHour,isOpen}){
  return (
    isOpen ? (
      <div className = 'order'>
        <p> 
          We're open until {closeHour}:00. Come visit us or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    ):(
      <div className = 'order'>
     <p> we're currently closed and will open by {openHour}:00.</p>
      <button style = {{backgroundColor:'grey'}}className="btn">Order</button>
    </div>
    )
  )
  
}


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
);
