function Stats({ items }) {
  const totalItems = items.length;

  const completedItems = items.filter((item) => item.done).length;

  return (
    <footer className="stats">
      <span>
        {completedItems} / {totalItems} Catatan Selesai
      </span>
    </footer>
  );
}

export default Stats;
