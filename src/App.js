import FriendList from "./components/friendList";

const initialFriends = [
  {
    id: 201,
    name: "John",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 202,
    name: "Mark",
    image: "https://i.pravatar.cc/48?u=92930",
    balance: 10,
  },
  {
    id: 203,
    name: "Jeff",
    image: "https://i.pravatar.cc/57?u=323312",
    balance: 0,
  },
];

function App() {
  return (
    <div className="app">
      <FriendList friends={initialFriends} />
    </div>
  );
}
export default App;
