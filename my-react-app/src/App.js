import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';

function App() {
  let thirdComponentProp = { secondComponentText: "Hello, This is the initial value for second component using prop and state" }
  return (
    <div className="App">
      <h1>React Props and State</h1>
      <FirstComponent initialValue="Hello, This is the initial value for first component" />
      <SecondComponent />
      <ThirdComponent initialValue={thirdComponentProp} />
    </div>
  );
}

export default App;
