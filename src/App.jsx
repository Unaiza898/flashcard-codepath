import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import tree from "./assets/tree.jpg";
import Cards from "./components/flashcard";

import front from "./assets/back-button.png";
import back from "./assets/right.png";
function App() {
  // const counter = 0;
  const flashcard = [
    {
      id: 0,
      level: "normal",
      front: "start",
      back: "Please start the game by pressing the arrow ",
    },
    { level: "easy", id: 1, front: "Heeeloo", back: "jkdfjkdjg" },
    {
      id: 2,
      level: "medium",
      front: "Whats ur name",
      back: "well I am not sure ",
    },
    {
      level: "hard",
      id: 3,
      front: "Whats is ur career",
      back: "software engineering ",
    },
  ];
  const [counter, setcounter] = useState(0);

  // onclick

  const ArrowUp = () => {
    if (counter < flashcard.length - 1) {
      setcounter(counter + 1);
    } else {
      setcounter(1);
    }
  };

  const Arrowdown = () => {
    if (counter > 1) {
      setcounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <h2> The ultimate Planet Parent</h2>
      <h4> How good of a plant parent are you fjkfjgkfjkg jfk gkfjg kf</h4>
      <h4> How good of a plant parent are you fjkfjgkfjkg jfk gkfjg kf</h4>

      {/* <Cards    /> */}

      <Cards
        level={flashcard[counter].level}
        id={flashcard[counter].id}
        front={flashcard[counter].front}
        back={flashcard[counter].back}
      />

      <img width="50px" height="50px" onClick={Arrowdown} src={front} />
      <img width="50px" height="50px" onClick={ArrowUp} src={back} />
      {console.log(counter)}
    </div>
  );
}

export default App;
