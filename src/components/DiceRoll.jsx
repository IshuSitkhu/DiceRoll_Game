import React from 'react';
import styled from 'styled-components';

const DiceRoll = ({ Roll, currentDice }) => {
    return (
        <DiceImage>
            <div className="image" onClick={Roll}>
                <img src={`./DiceImage/dice_${currentDice}.png`} alt="DiceImage" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceImage>
    );
};

export default DiceRoll;

// const DiceImage = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     .image {
//         width: 250px;
//         height: 250px;
//         // margin-top: 60px;
//         cursor: pointer;
//     }

//     p {
//         font-weight: 500;
//         font-size: 24px;
//     }
// `;

const DiceImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image {
    width: 60%; /* Makes it responsive */
    max-width: 250px; 
    cursor: pointer;
  }

  p {
    font-size: 2vw; /* Scales on smaller screens */
  }

  @media (max-width: 768px) {
    .image {
      width: 80%;
    }
    p {
      font-size: 4vw;
    }
  }
`;
