import React, {useState} from "react";

const Calculator = () => {
  let [result, setResult] = useState("");
  let [error, setError] = useState("");

 

  const handleInput = (e) => {
    // if (result.length >= 16) {
    //   setResult("!Large Input");
    //   setTimeout(() => {
    //     setResult("");
    //   }, 500);
    //   return;
    // }
    if (result.charAt(0) === "0") {
      result = result.slice(1, result.length);
    }
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    // if()
     try {
       result = eval(result).toString();
       console.info("result " , result);
       if (result.includes(".")) {
         result = +eval(result);
         result = result.toFixed(4).toString();
         setResult(result);
       } else {
         setResult(eval(result).toString());
       }
     } catch (err) {
       //setResult("Error!");
       if(result.length===0){
         setError("Number cannot be empty.");
         setResult("Error!");
       }
     }
   };


    return (
<div>
<form action="">
    <h1> React Calculator </h1>
    <input className="num1" type="text" placeholder="Num1" onChange={handleInput}></input>
    <input className="num2" type="text" placeholder="Num2" onChange={handleInput}></input>
<br/>
    <button className="operands" onClick={calculate}>+</button>
    <button className="operands" onClick={calculate}>-</button>
    <button className="operands" onClick={calculate}>*</button>   
    <button className="operands" onClick={calculate}>/</button>
    
    <div className="resultDisplay">{result}</div>
    <div className="error">{error}</div>
</form>
</div>
    );
}

export default Calculator;