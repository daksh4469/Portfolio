import './App.css';
import Body from './components/Body';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Body />
      <hr className="hr1"></hr>
      <hr className="hr2"></hr>
      <hr className="hr3"></hr>
      <hr className="hr4"></hr>
    </div>
  );
}

export default App;
