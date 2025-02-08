import{useState} from "react";
import HomePage from "./components/HomePage";
import PlayNow from "./components/PlayNow";

function App() {

  const[IsHomePage, setIsHomePage] = useState(true);
  const toggleGamePlay = () =>{
    setIsHomePage((prev) => !prev);
  };

  return(
    <>
    {IsHomePage ? <HomePage toggle = {toggleGamePlay}/> : <PlayNow toggle ={toggleGamePlay}/>}
     
    
    </>
    
  );
   
}

export default App



