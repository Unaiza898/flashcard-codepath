import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import tree from  './assets/tree.jpg'
import Cards from './components/flashcard'

import front from './assets/back-button.png'
import back from './assets/right.png'
function App() {

  // const counter = 0; 
  const flashcard = [ 
    {  id: 1,
      front: "Heeeloo",
      back: "jkdfjkdjg"},
      { id: 2,
        front: "Whats ur name",
        back: "well I am not sure "
    
      },
       { id: 3,
        front: "Whats is ur career",
        back: "software engineering "
    
      }
    
    ];
const [counter, setcounter] = useState(0);

// onclick 


const ArrowUp = () =>{

  if(counter < flashcard.length -1 )
  {
    setcounter(counter+1);

  }
  else{
    setcounter(counter);
  }

  
}

const Arrowdown = () =>{

  if(counter > 0  )
  {
    setcounter(counter-1);

  }
 
  
}



  return (
    <div className = 'App'>
      <div className='container'>
      <h2> The ultimate Planet Parent</h2>
        <h4> How good of a plant parent are you fjkfjgkfjkg jfk gkfjg kf</h4>
        <h4> How good of a plant parent are you fjkfjgkfjkg jfk gkfjg kf</h4>

        {/* <Cards    /> */}
        <div>
        <Cards id = {flashcard[counter].id} front={flashcard[counter].front} back={flashcard[counter].back}/>
  {/* {flashcard.map((flashcard) => (
    <Cards id = {flashcard.id} front={flashcard.front} back={flashcard.back}/>
  ))} */}
</div>
<img width="80px" height="80px" onClick = {Arrowdown} src={front}/>
     
 <img width="80px" height="80px" onClick = {ArrowUp} src={back}/>
 </div>

       {console.log(counter)}
  
    </div>
  )
}

export default App
