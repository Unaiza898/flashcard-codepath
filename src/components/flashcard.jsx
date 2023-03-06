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

// document.querySelector('.card').addEventListener('click', () => {
//     document.querySelector('#foo').toggleClass('myClass');
//   }); 


const cards = (props) => {
    return (
        <div className='card'>
                 <div className='side front '>
                    {props.id}
                {props.front}
           
            </div>
            <div className='side back'>
                {props.back}
    
            </div>


        </div>
    )
}

export default cards;