export default function Stats({ items }) {
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
