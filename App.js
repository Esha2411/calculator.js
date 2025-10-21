import React,{ useState } from 'react'
import './App.css'
function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => setInput("");
  const handleDelete = () => setInput(input.slice(0, -1));
  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="container">
      
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text"value={input}readOnly />
          </div>
          <div>
            <input type="button" value="AC"onClick={handleClear}></input>
             <input type="button" value="DEL"onClick={handleDelete}></input>
              <input type="button" value="."onClick={() =>handleClick(".")}></input>
               <input type="button" value="/"onClick={() =>handleClick("/")}></input>
          </div>
          <div>
            <input type="button" value="7"onClick={() =>handleClick("7")}></input>
             <input type="button" value="8"onClick={() =>handleClick("8")}></input>
              <input type="button" value="9"onClick={() =>handleClick("9")}></input>
               <input type="button" value="*"onClick={() =>handleClick("*")}></input>
          </div>
          <div>
            <input type="button" value="4"onClick={() =>handleClick("4")}></input>
             <input type="button" value="5"onClick={() =>handleClick("5")}></input>
              <input type="button" value="6"onClick={() =>handleClick("6")}></input>
               <input type="button" value="+"onClick={() =>handleClick("+")}></input>
          </div>
          <div>
            <input type="button" value="1"onClick={() =>handleClick("1")}></input>
             <input type="button" value="2"onClick={() =>handleClick("2")}></input>
              <input type="button" value="3"onClick={() =>handleClick("3")}></input>
               <input type="button" value="-"onClick={() =>handleClick("-")}></input>
          </div>
          <div>
            <input type="button" value="00"onClick={() =>handleClick("00")}></input>
             <input type="button" value="0"onClick={() =>handleClick("0")}></input>
              <input type="button" value="="onClick={handleEqual}></input>
          </div>
          

        
           
         
        </form>
      </div>
    </div>
  );
}
export default App 

