import React from "react";
import Item from "./Item";

function CheckList({ items, onToggleItem, onDeleteItem, onClearItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select name="" id=""></select>
        <button onClick={onClearItems}>Hapus</button>
      </div>
    </div>
  );
}

export default CheckList;
