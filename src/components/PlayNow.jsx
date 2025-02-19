

import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import DiceRoll from "./DiceRoll";
import Rules from "./Rules";
import { useState } from "react";

// const MainContainer = styled.main`
//   user-select: none !important;
//   outline: none !important;
//   .top_section {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     padding: 10px;
//   }
// `;

const MainContainer = styled.main`
  width: 100%;
  padding: 10px;

  .top_section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; /* Fixes layout for small screens */
    gap: 20px;
  }

  @media (max-width: 768px) {
    .top_section {
      flex-direction: column;
      align-items: center;
    }
  }
`;


const Btn = styled.button`
  background-color: black;
  border-radius: 5px;
  padding: 10px 18px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  min-width: 220px;
  cursor: pointer;
  border: none;
  margin: 10px 0;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s ease-in;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const PlayNow = ({ toggle }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, SetCurrentDice] = useState(1);
  const [score, SetScore] = useState(0);
  const [error, SetError] = useState("");
  const [rulesPage, setRulesPage] = useState(false);

  const ResetHandler = () => {
    SetScore(0);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const Roll = () => {
    if (selectedNumber === null) {
      SetError("You have not selected any number. Please select the number first");
      return;
    }

    SetError(""); // Clear error if user selects a number

    const randomNumber = generateRandomNumber(1, 6);
    SetCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      SetScore((prev) => prev + randomNumber); // Award dice value points
    } else {
      SetScore((prev) => prev - 1); // Deduct 2 points for incorrect guess
    }

    setSelectedNumber(null); // Reset selected number after rolling
  };

  const toggleRulesPage = () => {
    setRulesPage((prev) => !prev);
  };

  // If rulesPage is true, show the Rules component instead of the PlayNow content
  if (rulesPage) {
    return <Rules toggle={toggleRulesPage} />;
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          SetError={SetError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <DiceRoll currentDice={currentDice} Roll={Roll} />

      <ButtonGroup>
        <Btn onClick={ResetHandler}>Reset Score</Btn>
        <Btn onClick={toggleRulesPage}>Show Rules</Btn>
        <Btn onClick={toggle}>Go Back</Btn>
      </ButtonGroup>
    </MainContainer>
  );
};

export default PlayNow;
