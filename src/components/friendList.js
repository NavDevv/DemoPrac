import { useState } from "react";
import Form from "./Form";
import "./friendList.css";

export default function FriendList({ friends }) {
  const [open, setOpen] = useState(false);
  const [addFriend, setAddFriend] = useState(false);
  const [list, setList] = useState(friends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleFriendList(friend) {
    setList((friends) => [...friends, friend]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setAddFriend(false);
    setOpen(!open);
  }

  return (
    <div className="sidebar">
      <ul>
        {list.map((friends) => (
          <li
            key={friends.id}
            className={selectedFriend?.id === friends.id ? "selected" : ""}
          >
            <h3> {friends.name}</h3>
            {friends.balance < 0 && (
              <p className="red">
                You owe {friends.name} {friends.balance}
              </p>
            )}
            {friends.balance > 0 && (
              <p className="green">
                {friends.name} owes you {friends.balance}
              </p>
            )}
            {friends.balance === 0 && <p>You and {friends.name} are even</p>}
            <ImageFix friends={friends} />
            <button
              className="btn"
              onClick={() => handleSelectedFriend(friends)}
            >
              {selectedFriend?.id === friends.id ? "Close" : "Select"}
            </button>
          </li>
        ))}
      </ul>
      {addFriend && <AddFriend handleFriendList={handleFriendList} />}
      <button className="btn" onClick={() => setAddFriend(!addFriend)}>
        {addFriend ? "Close" : "Add Friend"}
      </button>

      <div className="App">
        {open && (
          <Form selectedFriend={selectedFriend} list={list} setList={setList} />
        )}
      </div>
    </div>
  );
}

function ImageFix({ friends }) {
  return (
    <li className="sidebar">
      <img src={friends.image} alt={friends.name}></img>
    </li>
  );
}

function AddFriend({ handleFriendList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118837");

  function updateFriendList(e) {
    e.preventDefault();
    const newFriends = {
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
    };
    handleFriendList(newFriends);
    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={updateFriendList}>
      <label>Frined Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input>
      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button className="btn">Add</button>
    </form>
  );
}
