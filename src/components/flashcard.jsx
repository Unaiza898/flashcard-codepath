import React from 'react';

// .card:hover .side.front {
//     transform: rotateX(180deg);
//   }
  
//   .card:hover .side.back {
//     /* transform: rotateY(180deg); */
//     transform: rotateY(var(--rotate-y, 0));
//     transform-style: preserve-3d;
//     transition: 1500ms;
//     cursor: pointer;
//     transform: perspective(5000px) rotateY(var(--rotate-y, 0)) translateY(var(--translate-y, 0));
//   }

var flash = document.querySelectorAll('.card');

// [...flash].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });

const handleClick = event => {
    // 👇️ toggle class on click
    event.currentTarget.classList.toggle('is-flipped');

 };


const cards = (props) => {
    return (
        <div   className='card' onClick={handleClick}>
                 <div  id = {props.level}  className='side front '>
                  
                {props.front}
           
            </div>
            <div className='side back'>
                {props.back}
    
            </div>



        </div>


    )
}

export default cards;