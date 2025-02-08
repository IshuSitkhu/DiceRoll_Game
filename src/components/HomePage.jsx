import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    max-width: 1180px;
    margin: 0 auto;
    align-items: center;
    height:100vh;
      user-select: none !important; 
    outline: none !important; 

    .Play {
        h1{
            font-weight: 1000;
            font-Size: 96px;
            white-space:nowrap;
        }
    }
`;

const Button = styled.button`
    background-color:black;
    boader-radius:5px;
    Padding:10px 18px;
    color:white;
    font-weight:600;
    font-size:16px;
    min-width:220px;
    cursor:pointer;
    

    &:hover{
     background-color:white;
     color:black;
     transition: 0.3s background ease-in;

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

