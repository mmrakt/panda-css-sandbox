import { css } from "../styled-system/css";

function App() {
  return (
    <div
      id="app"
      className={css({
        fontSize: "3xl",
        fontWeight: "bold",
        margin: "20",
      })}
    >
      Hello 🐼!
    </div>
  );
}

export default App;
