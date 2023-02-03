import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Landingpage from './components/landingpage';
import Category from './components/catogery';
import Personal from './components/personalpage';
import Update from './components/resume';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Landingpage/>}/>
      <Route path='/add' element = {<Category/>}/>
      <Route path='/update/:id' element = {<Update/>}/>
      <Route path='/view' element = {<Personal/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
