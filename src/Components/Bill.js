export default function Bill({ amount, setAmount }) {
  return (
    <div>
      <span>
        How much was the bill?
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        ></input>
      </span>
    </div>
  );
}
