import { useState } from "react";
import Logo from "./components/logo";
import Form from "./components/form";
import PackingList from "./components/packingList";
import Stats from "./stat";

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

  function deleteItems() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        items={items}
        removeItems={removeItems}
        updateItems={updateItems}
        deleteItems={deleteItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
