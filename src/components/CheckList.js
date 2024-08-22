import React, { useState } from "react";
import Item from "./Item";

function CheckList({ items, onToggleItem, onDeleteItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  function sortItems() {
    return [...items].sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "status") {
        return a.done === b.done ? 0 : a.done ? 1 : -1;
      } else {
        return a.id - b.id;
      }
    });
  }

  const sortedItems = sortItems();
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan Berdasarkan Input</option>
          <option value="title">Urutkan Berdasarkan Title</option>
          <option value="status">Urutkan Berdasarkan Status</option>
        </select>
        <button onClick={onClearItems}>Hapus</button>
      </div>
    </div>
  );
}

export default CheckList;
