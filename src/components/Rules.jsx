// import React from 'react'
// import styled from 'styled-components'

// const Rules = ({toggle}) => {
    
//   return (
//     <RuleContainer>
//       <h1>How to play dice game</h1>
//       <div className="steps">
//         <ul>
//             <li>Select any number</li>
//             <li>Click on dice image</li>
//             <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
//             <li>if you get wrong guess then  2 point will be dedcuted</li>
//         </ul>
        
//       </div>
//       <button onClick={toggle}>Hide Rules</button>
//     </RuleContainer>
//   )
// }

// export default Rules


// const RuleContainer = styled.div`
// background-color:#FBF1F1;
// boarder:1px solid black;
//   user-select: none !important; 
//     outline: none !important; 

// h1{
// text-align:center;
// }

// .steps{
//     font-size:25px;
// }
// `

import React from "react";
import styled from "styled-components";

const Rules = ({ toggle }) => {
  return (
    <RuleContainer>
      <h1>How to Play Dice Game</h1>
      <div className="steps">
        <ul>
          <li>Select any number</li>
          <li>Click on the dice image</li>
          <li>
            If the selected number matches the dice number, you will earn points
            equal to the dice value.
          </li>
          <li>If the guess is wrong, 1 point will be deducted.</li>
        </ul>
      </div>
      <Btn onClick={toggle}>Hide Rules</Btn>
    </RuleContainer>
  );
};

export default Rules;

const RuleContainer = styled.div`
  background-color: #fbf1f1;
  border: 1px solid black;
  user-select: none !important;
  outline: none !important;
  padding: 20px;
//   text-align: center;

  h1 {
    text-align: center;
  }

  .steps {
    font-size: 20px;
    margin-top: 15px;
  }
`;

const Btn = styled.button`
  background-color: black;
  border-radius: 5px;
  padding: 10px 18px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin-top: 20px;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s ease-in;
  }
`;
