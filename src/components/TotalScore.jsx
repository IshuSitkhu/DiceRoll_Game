import styled from 'styled-components';

const TotalScore = ({score}) => {
  return (
    <ScoreContaner>
          <h1>{score}</h1>
          <p>Total Score</p>
    </ScoreContaner>
  );
};

export default TotalScore;

const ScoreContaner = styled.div`

// background-color:red;
max-width:120px;
 user-select: none; /* Fixes unwanted selection */
  outline: none; /* Removes focus outline */
  border:1px solid black;

h1{
// line-height:50px;
font-size:150px;
font-weight:500;
Height:50px;
// background-color:black;
text-align:center;
margin-top: -10px;


}
p{
    font-size:24px;
    font-weight:500px;
    // background-color:blue;
    margin-top:-70px
    // Width:135px;
    // Height:36px;
}
`;