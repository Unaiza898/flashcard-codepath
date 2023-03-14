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
      id: 1,
      level: "normal",
      front: "start",
      back: "Please start the game by pressing the arrow ",
    },
    { level: "easy", id: 2, front: "In cybersecurity, what does CIA stand for?", 
    back: "Confidentiality, Integrity, Availability" },
    {
      id: 3,
      level: "easy",
      front: "What is cyberspace?",
      back: "A concept describing a widespread interconnected digital technology"
    },
    {
      level: "hard",
      id: 4,
      front: "What is DDoS attack example?",
      back: "DDoS attacks are UDP flooding, SYN flooding and DNS amplification",
    },
    {
      level: "easy",
      id: 5,
      front: "What is Authorization?",
      back: "A document giving permission or authority",
    },
    {
      level: "medium",
      id: 6,
      front: "What are bots?",
      back: "A bot is an automated program that runs over the Internet",
    },
    {
      level: "easy",
      id: 7,
      front: "What's Antivirus Software?",
      back: "Designed to detect and destroy computer virus",
    },
    {
      level: "medium",
      id: 8,
      front: "What's an example of integrity?",
      back: "informing a cashier that they gave you too much change",
    },
    {
      level: "easy",
      id: 9,
      front: "What is a hacker?",
      back: "A person who uses computers to gain unauthorized access to data",
    },
    {
      level: "hard",
      id: 10,
      front: "What is Fuzzing?",
      back: "A method that is used to test the security of software.",
    },
  ];
  const [counter, setcounter] = useState(0);
  const [guess,setguess] = useState({answer: ''});
  const [streak, setStreak] = useState(0);
  const [gcount,setGcount] = useState(0);
  const[answer, setAnswer] = useState('guess')
  // onclick

  const ArrowUp = () => {
    // document.getElementById("is-flipped").classList.toggle("");
    // setguess('')


    // card.classList.toggle('card');
    if (counter < flashcard.length - 1) {
      setcounter(counter + 1);
    } else {
      setcounter(1);
    }

    setguess({...guess,answer:''})
    setAnswer("guess");
  };

  const Arrowdown = () => {

    setguess({...guess,answer:''})
    setAnswer("guess");
    if (counter > 1) {
      setcounter(counter - 1);
    }
  };

  const handleChange = (e) =>{
    
    const change = {}
    const newval = e.target.value
    console.log(newval)
    const key = e.target.name
    change[key] = newval
    setguess({...guess,...change})

  }
const submitGuess = (guess) => {
  const val = guess.answer

  console.log("val" + val)
  console.log("ans" + flashcard[counter].back)

  if(guess.answer ==flashcard[counter].back )
  {
    {console.log("correct")}

    setAnswer("correct");

    setGcount(gcount+1);


  }

  else{
    setAnswer("wrong");
    // alert("wrg!")
    setStreak(Math.max(streak, gcount))
    setGcount(0)
   
  }



}
  const handleOnSubmit = (e) => {

    e.preventDefault();
    submitGuess(guess)
   
  }
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const shuffle = () => {

    const current = counter
    const rndInt = randomIntFromInterval(1, 9)
    if(current == rndInt)
    {
      rndInt = randomIntFromInterval(1, 9)
    }
    else{
      setcounter(rndInt)
    }
   


  }
  return (
    <div className="container">
      <h2> Cyber Security</h2>
      <p> Test your cyber security knowledge!</p>
      <p> Number of cards: 10</p>

      <h4> Streak :     {streak}</h4>
      <h4> count :   {gcount}</h4>

      <Cards
        level={flashcard[counter].level}
        id={flashcard[counter].id}
        front={flashcard[counter].front}
        back={flashcard[counter].back}
        card="card"
      
      />
      <form   onSubmit={handleOnSubmit} >
        <label> Guess:
        <input className={answer} value={guess.answer} type= "text"
        onChange={handleChange} placeholder="Write your guess here?" name="answer"/>
           </label>
          
      </form>
      <div>
      <button className="shuffle" onClick={shuffle}>   Shuffle </button>
      </div>
    
     
      <img className = "Arrow" width="50px" height="50px" onClick={Arrowdown} src={front} />
      <img className = "Arrow-right"width="50px" height="50px" onClick={ArrowUp} src={back} />
      {console.log(counter)}
     
    
    </div>

  );
}

export default App;
