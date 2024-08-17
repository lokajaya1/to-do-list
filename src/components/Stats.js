function Stats({ items }) {
  // Menghitung jumlah total item
  const totalItems = items.length;

  // Menghitung jumlah item yang sudah selesai
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
