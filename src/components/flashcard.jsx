import React from "react";

var flash = document.querySelectorAll(".card");

// [...flash].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });



const cards = (props) => {
    const handleClick = (event) => {
        // 👇️ toggle class on click
            event.currentTarget.classList.toggle("is-flipped");
  
   
      };
  return (
    <div className={props.card} onClick={handleClick}>
      <div id={props.level} className="side front ">
        {props.front}
      </div>
      <div className="side back">{props.back}</div>
    </div>
  );
};

export default cards;
