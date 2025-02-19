import React from 'react'
import styled from 'styled-components'

// const Container = styled.div`
//     display:flex;
//     max-width: 1180px;
//     margin: 0 auto;
//     align-items: center;
//     height:100vh;
//       user-select: none !important; 
//     outline: none !important; 

//     .Play {
//         h1{
//             font-weight: 1000;
//             font-Size: 96px;
//             white-space:nowrap;
//         }
//     }
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Stack items on small screens */
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  height: 100vh;

  .Play h1 {
    font-size: 8vw; /* Dynamic font size */
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;


// const Button = styled.button`
//     background-color:black;
//     boader-radius:5px;
//     Padding:10px 18px;
//     color:white;
//     font-weight:600;
//     font-size:16px;
//     min-width:220px;
//     cursor:pointer;
    

//     &:hover{
//      background-color:white;
//      color:black;
//      transition: 0.3s background ease-in;

//     }
// `;

const Button = styled.button`
  background-color: black;
  border-radius: 5px;
  padding: 12px 20px;
  color: white;
  font-size: 1.2rem;
  min-width: 180px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s ease-in;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    font-size: 1rem;
  }
`;



const HomePage = ({toggle}) => {
  return (
    <Container>
        <div className="box">
        <img src='./dices 1.png' alt='Image'/>
        </div>

      <div className="Play">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default HomePage

