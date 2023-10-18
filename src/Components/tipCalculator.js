export default function TipCalculator({ tip, setTip }) {
  return (
    <div>
      <span>
        How did you like the service?
        <select value={tip} onChange={(e) => setTip(e.target.value)}>
          <option value={0}>Dissatisfied(0%)</option>
          <option value={5}>It was okay(5%)</option>
          <option value={10}>It was good(10%)</option>
          <option value={20}>Absolutely Amazing!(20%)</option>
        </select>
      </span>
    </div>
  );
}
