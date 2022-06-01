import { useState, useEffect } from "react";

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  function Hello() {
    function destroied() {
      console.log("destroied :(");
    }
    function create() {
      console.log("created :)");
      return destroied;
    }
    useEffect(create, []);
    return <h1>Hello</h1>;
  }

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
