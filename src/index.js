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
  const numPizza = pizzaAval.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza < 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from out stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on the menu. Please come back later</p>
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

function Pizza({ pizzaObj }) {
  //if (props.pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
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
  const open = hours > timmings.oHours && hours < timmings.cHours;
  console.log(open);

  // if (hours >= timmings.oHours && hours <= timmings.cHours)
  //   alert(`We are currently open`);
  // else alert(`Sorry we're closed!`);
  return (
    <footer className="footer">
      {open ? (
        <Order cHours={timmings.cHours}></Order>
      ) : (
        <p>
          Sorry we're closed right now come back between {timmings.oHours}:00
          and {timmings.cHours}:00.
        </p>
      )}
    </footer>
  );
  //return React.createElement('footer', null, `We're Currentluy Open`)
}

function Order({ cHours }) {
  return (
    <div className="order">
      <p>We're open until {cHours}:00. Come visit us or Order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// To render the projects that used old react versions use this ->
// React.render(<App />, document.getElementById("root"))
