import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item){
    setItems(items => [...items, item])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems = {handleItems}/>
      <PackingList items = {items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>Far Away</h1>
    </div>
  );
}
function Form({onAddItems}) {
  let [description, SetDescription] = useState("");
  let [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, ID: Date.now() };
    console.log(newItem);
    SetDescription("");
    setQuantity(1);
    onAddItems(newItem);
  }

 

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (a, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add Items..."
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
        required
      ></input>
      <button>ADD</button>
    </form>
  );
}
function PackingList({items}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {

  function removeItems(){
    if(true){
    item= false;
    }
  }
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={removeItems}>X</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you have already packed X (X%)</em>
    </footer>
  );
}

export default App;
