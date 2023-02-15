import React,{useState} from "react";    // useState is function in react hook
 // function based approach
function CounterFunction(){
    let [number,setNumber]=useState(0)

    function increment(){
        setNumber(++number)
    }

    return(
        <div>
            <h1>Counter={number}</h1>
            <button onClick={e=>increment()}>Increment</button>   {/*use arrow function*/ }
        </div>

    )
}
export default CounterFunction;