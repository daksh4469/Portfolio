import './App.css';
import Body from './components/Body';
//eslint-disable-next-line
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Body />
      <hr className="hr4"></hr>
    </div>
  );
}

export default App;
