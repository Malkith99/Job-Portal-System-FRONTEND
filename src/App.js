import './App.css';
import CounterCalss from './components/CounterClass';
import CounterFunction from './components/CounterFunction';

function App() {         
  return (
    <div className="App">
      <h1>Hello React</h1>
      <CounterCalss/>      {/* calling the counter class  */}   
      <hr></hr> 
      <CounterFunction/>              
    </div> 
  );
}

export default App;
