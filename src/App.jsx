import { createBrowserRouter } from 'react-router-dom';
import Contact from './components/contact';
import Home from './components/Home';
import About from './components/about';

let App = createBrowserRouter([
  {
    
    path: "/",
    element:<Home/>

  },
  {
    
    path: "/contact",
    element:<Contact/>

  },
  {
    
    path: "/about",
    element:<About/>

  },
])

export default App;
