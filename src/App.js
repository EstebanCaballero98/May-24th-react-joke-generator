import { useState } from "react";
function App() {
  const [joke, changeJoke] = useState();
  const [punchline, changePunchline] = useState();

  const getJoke = async () => {
    try {
      const res = await fetch(" http://localhost:5000/jokes");
      if (!res.ok) {
        throw new Error(`http error ${res.status}`);
      }
      const data = await res.json();
      const randomNumber = Math.floor(Math.random() * data.length);
      changeJoke((prev) => data[randomNumber].setup);
      changePunchline((prev) => data[randomNumber].punchline);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  return (
    <div>
      <div className="container">
        <button onClick={getJoke} className="button">
          Generate joke
        </button>
        <div className="qoute">{joke}</div>
        <div className="author">{punchline}</div>;
      </div>
    </div>
  );
}

export default App;
