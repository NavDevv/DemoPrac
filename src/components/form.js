import { useState } from "react";

export default function Form({ handleItems }) {
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
