import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const listItems = [
  { id: 1, title: "eat", done: false },
  { id: 2, title: "sleep", done: false },
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
  return (
    <div className="add-form">
      <h3>Ada yang mau di catat</h3>
    </div>
  );
}

function CheckList() {
  return (
    <div className="list">
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>
            <input type="checkbox" />
            <span>{item.title}</span>
            <button>
              <i
                class="fa fa-close"
                style={{ fontSize: "24px", color: "red" }}
              ></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
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
