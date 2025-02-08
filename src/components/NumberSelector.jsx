import styled from "styled-components";

const NumberSelector = ({ SetError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const SelectorHandler = (value) => {
    setSelectedNumber(value);
    SetError(""); // Clear error when selecting a number
  };

  return (
    <NumberSelectorContainer>
     
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => SelectorHandler(value)} // FIXED: Passing the correct value
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Selected Number</p>
      <h1>{error}</h1>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
    user-select: none !important; 
    outline: none !important; 

  .flex {
    display: flex;
    gap: 24px;
  }

  h1 {
    background-color: fbf1f1;
    border: 1px solid black;
    color: red;
    padding: 5px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")}; // FIXED
  color: ${(props) => (props.isSelected ? "white" : "black")}; // FIXED
`;
