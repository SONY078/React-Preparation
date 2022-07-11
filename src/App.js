import './App.css';
// import {BrowserRouter , Routes , Route} from 'react-router-dom
import Greetings from './IDay1/iday-1'

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Parent from './IDAY2/Parent';
import Week from './IDAY2/Week';
import Store from './IDAY2/iday-2';
import Home from './IDAY2/Home';
import Contact from './IDAY2/Contact';
import About from './IDAY2/About';
import Navbar from './IDAY2/Navb';
import NotFound from './IDAY2/Not';

import Iday3 from './IDAY3/iday-3';
import UseEffect from './IDAY3/UseEffect';
import UseS from './IDAY3/UseS';

import LifeCycle from './IDAY4/LifeCycle';
import {useSelector,useDispatch} from 'react-redux'
import {Dec,Inc,Res} from './IDAY4/action';
import CalculateFactorial from './IDAY4/UseMemoExample';
import RenderCounter from './IDAY4/UseRef';
import StopWatch from './IDAY4/UseRefExample';

function App() {
  const ChangeState = useSelector((state)=>state.Changer);
  const disp = useDispatch();
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar />
        <Greetings/>
        <Parent />
      <Store/>
      <Week day="thursday"/>
     <UseS/>
      <hr/>
      <UseEffect/>
      <hr/>
      <Iday3/>
      <hr/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <LifeCycle/>
      <h1>{ChangeState}</h1>
      <button onClick={()=>{disp(Inc())}}>Increment ⤴️</button>&emsp;
      <button onClick={()=>{disp(Dec())}}>decrement ⤵️</button>&emsp;
      <button onClick={()=>{disp(Res())}}>Reset 🔁</button>
      <CalculateFactorial/>
      <RenderCounter/>
      <StopWatch/>
    </div>
  );
}

export default App;
