import React from "react";   // import react and store in React variable

//class base apporoach
class CounterCalss extends React.Component{          // inherit from the super class components
    constructor(){
        super();
       this.increment=this.increment.bind(this)       // bind the function increment with this class
        this.state={       //state is javascript object
            number:0       // number is variable and assign zero for it
        }
    }
     increment(){
        this.setState({
            number: ++this.state.number 
        })
     }


    render(){
        return(
            <div>
                <h1> Counter = {this.state.number}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}
export default CounterCalss