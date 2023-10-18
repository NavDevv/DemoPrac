export default function FriendTipCalc({ tip1, setTip1 }) {
  return (
    <div>
      <span>
        How did your Friend like the service?
        <select value={tip1} onChange={(e) => setTip1(e.target.value)}>
          <option value={0}>Dissatisfied(0%)</option>
          <option value={5}>It was okay(5%)</option>
          <option value={10}>It was good(10%)</option>
          <option value={20}>Absolutely Amazing!(20%)</option>
        </select>
      </span>
    </div>
  );
}
