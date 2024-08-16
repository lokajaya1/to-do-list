import { useState } from "react";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const listItems = [
  { id: 1, title: "eat", done: false },
  { id: 2, title: "sleep", done: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <CheckList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span className="logo">To - Do List</span>;
}

function Form() {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau di catat</h3>
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

function CheckList() {
  return (
    <div className="list">
      <ul>
        {listItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.title}
      </span>
      <button>
        <i class="fa fa-close" style={{ fontSize: "24px", color: "red" }}></i>
      </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>stats</span>
    </footer>
  );
}

export default App;
