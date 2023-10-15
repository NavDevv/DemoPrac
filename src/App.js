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
      <Form handleItems={handleItems} />
      <PackingList
        items={items}
        removeItems={removeItems}
        updateItems={updateItems}
      />
      <Stats items={items} />
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
function Form({ handleItems }) {
  let [description, SetDescription] = useState("");
  let [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    handleItems(newItem);
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
function PackingList({ items, removeItems, updateItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            removeItems={removeItems}
            ontoggle={updateItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by the packed status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, removeItems, ontoggle }) {
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
      <button onClick={() => removeItems(item.id)}>X</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>You have not packed anything yet, Start packing </em>
      </p>
    );

  const tItems = items.length;
  const packed = items.filter((item) => item.packed).length;
  const packedPerc = Math.round((packed / tItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPerc === 100
          ? "You got everything! Ready to go"
          : `You have ${tItems} items on your list, and you have already packed
        ${packed} (${packedPerc}%)`}
      </em>
    </footer>
  );
}

export default App;
