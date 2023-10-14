import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function removeItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function updateItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDelete={removeItems}
        onToggle={updateItems}
      />
      <Stats handleItems={handleItems} />
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
function Form({ onAddItems }) {
  let [description, SetDescription] = useState("");
  let [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    SetDescription("");
    setQuantity(1);
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
function PackingList({ items, onDelete, onToggle }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDelete={onDelete}
            ontoggle={onToggle}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDelete, ontoggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          ontoggle(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>X</button>
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
