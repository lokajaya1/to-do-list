function Stats({ items }) {
  const totalItems = items.length;

  const doneItems = items.filter((item) => item.done).length;

  return (
    <footer className="stats">
      <span>
        {doneItems} / {totalItems} Catatan Selesai
      </span>
    </footer>
  );
}

export default Stats;
