import './App.css';
import CounterCalss from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';                        //import header file from the components

function App() {         
  return (
   /*<div className="App">
      <h1>Hello React</h1>
      <CounterCalss/>      /* calling the counter class  */ 
      /*<hr></hr> 
      <CounterFunction/>              
  </div> */
    <div>
     <Header/>
    </div>

  );
}

export default App;
