import { useState } from "react";

function Form({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim()) {
      const newItem = {
        id: Date.now(),
        title: title,
        completed: false,
      };
      onAddItem(newItem);
      setTitle("");
    }
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau di catat ?</h3>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>
        <i class="fa fa-add" style={{ color: "white" }}></i>
      </button>
    </form>
  );
}

export default Form;
