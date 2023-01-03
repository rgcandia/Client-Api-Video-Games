import './App.css';
import {Routes,Route} from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import Details from './components/Details/Details.jsx';
import CreateGame from './components/CreateGame/CreateGame';
import Error404 from './components/404/Error404';
function App() {

  return (
    <div className="App">
     
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/create' element={<CreateGame/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
       
    </div>
  );
}

export default App;
