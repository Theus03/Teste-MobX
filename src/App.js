import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react-lite'

const App = observer((props) => {
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1 title='Value'>{props.store.count}</h1>
      <button onClick={() => props.store.increment()}>+ Increment</button>
      <button onClick={() => props.store.decrement()}>- Decrement</button>
    </div>
  );
});

export default App;
