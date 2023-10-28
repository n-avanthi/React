// import logo from './logo.svg';
// import './App.css';
import FunctionalComp from './Components/FunctionalComp';
// import ClassComp from './Components/ClassComp';
import { ClassComp, ClassComp1 } from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>This is my first App</h2>
      <FunctionalComp></FunctionalComp>
      <ClassComp></ClassComp>
      <ClassComp1></ClassComp1>
      <Click></Click>
      <Counter></Counter>
    </div>
  );
}

export default App;
