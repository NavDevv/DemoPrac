import { useState } from "react";

export default function Form({ selectedFriend, list, setList }) {
  const name = selectedFriend?.name;
  const id = selectedFriend?.id;
  const [bill, setBill] = useState();
  const [paidBy, setPaidBy] = useState();
  const [whoPaid, setWhoPaid] = useState("Me");
  const paid = bill ? bill - paidBy : "";
  function handleAllSplit(value) {
    setList(
      list.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  function splitBill(e) {
    e.preventDefault();
    if (!bill || !paid) return;
    handleAllSplit(whoPaid === "Me" ? paid : -paidBy);
  }

  return (
    <div
      className="
    form-split-bill"
    >
      <form className="form-split-bill">
        <h2>Split bill with the {name} </h2>
        <label>Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        ></input>
        <label>Your Expense</label>
        <input
          type="text"
          value={paidBy}
          onChange={(e) =>
            setPaidBy(
              Number(
                Number(e.target.value) > bill ? paidBy : Number(e.target.value)
              )
            )
          }
        ></input>
        <label>{name}'s Expense</label>
        <input type="text" disabled value={paid}></input>
        Who is paying the Bill
        <select value={whoPaid} onChange={(e) => setWhoPaid(e.target.value)}>
          <option value={`Me`}>{`Me`}</option>
          <option value={name}>{name}</option>
        </select>
        <button className="button" onClick={splitBill}>
          Split Bill
        </button>
      </form>
    </div>
  );
}
