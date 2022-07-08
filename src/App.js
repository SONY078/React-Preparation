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

function App() {
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
    </div>
  );
}

export default App;
