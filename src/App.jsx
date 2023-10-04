import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import Contact from './components/contact';

let App = () => {

  return (
    <>
    
    <Route path="/" exact component={<Home/>} />
    <Route path="/contact" exact component={<About/>} />
      <Route path="/about" exact component={<Contact />} />
      </>
  )
}

export default App;
