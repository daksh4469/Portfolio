import './App.css';
import Body from './components/Body';
//eslint-disable-next-line
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {
  return (
    <div className="App">
    {/*eslint-disable-next-line */}
      <a className="scroll-icon"><i class="fas fa-3x scroll-icon fa-chevron-circle-up" style={{color: '#fff', position:'fixed', top:'90vh', right: '1.25vw', cursor: 'pointer'}} onClick={() => scroll.scrollToTop()}></i></a>
      <Body />
    </div>
  );
}

export default App;
