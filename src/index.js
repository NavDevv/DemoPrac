import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 style={{ color: "red", textTransform: "uppercase" }}>
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  const pizzaAval = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaAval > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and
        ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      ></Pizza>
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mushroom"
        price={12}
        photoName="pizzas/funghi.jpg"
      ></Pizza> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  console.log(hours);
  const timmings = {
    oHours: 12,
    cHours: 22,
  };
  const open = hours >= timmings.oHours && hours <= timmings.cHours;
  console.log(open);

  // if (hours >= timmings.oHours && hours <= timmings.cHours)
  //   alert(`We are currently open`);
  // else alert(`Sorry we're closed!`);
  return (
    <div className="footer">
      <footer style={{ fontWeight: "12px" }}>
        {open && (
          <div className="order">
            <p>
              We're open until {timmings.cHours}:00. Come visit us or Order
              online.
            </p>
            <button className="btn">Order</button>
          </div>
        )}
      </footer>
    </div>
  );
  //return React.createElement('footer', null, `We're Currentluy Open`)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// To render the projects that used old react versions use this ->
// React.render(<App />, document.getElementById("root"))
