import './App.css';
// import {BrowserRouter , Routes , Route} from 'react-router-dom
import Greetings from './IDay1/iday-1'

import Parent from './IDAY2/Parent';
import Week from './IDAY2/Week';
import Store from './IDAY2/iday-2';

function App() {
  return (
    <div className="App">
    
      <Greetings/>
    
      <Parent/>
      <Store/>
      <Week day="thursday"/>
    </div>
  );
}

export default App;
