import logo from './logo.svg';
import './App.css';
import Program from './Program/Program';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';
import Li from './Login/Login'
import Terms from './Terms/Terms';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutus from './Aboutus/Aboutus';
import ProfilePage from './ProfilePage/ProfilePage';
import Getstart from './Getstart/Getstart';
import Content1 from './Content/Content1';
import Content2 from './Content/Content2';
import Content3 from './Content/Content3'
import Content4 from './Content/Content4'
import Content5 from './Content/Content5';
import Content6 from './Content/Content6';
import Content7 from './Content/Content7'
import Content8 from './Content/Content8';
import Contact from './Contact/Contact';
import Maintainance from './Maintainance/Maintainance';
import Card1 from './Card/Card1';
import Pay from './Pay/Pay';
import Pay1 from './Pay/Pay1'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Class' element={<Program/>}/>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Login' element={<Li/>}></Route>
        <Route path='/Terms' element={<Terms/>}></Route> 
        <Route path='/Aboutus' element={<Aboutus/>}></Route>
        <Route path='/Profile' element={<ProfilePage/>}></Route>
        <Route path='/Getstart' element={<Getstart/>}></Route>
        <Route path='/t1' element={<Content1/>}></Route>
        <Route path='/t2' element={<Content2/>}></Route>
        <Route path='/t3' element={<Content3/>}></Route>
        <Route path='/t4' element={<Content4/>}></Route>
        <Route path='/t5' element={<Content5/>}></Route>
        <Route path='/t6' element={<Content6/>}></Route>
        <Route path='/t7' element={<Content7/>}></Route>
        <Route path='/t8' element={<Content8/>}></Route>
        <Route path='/cont' element={<Contact/>}></Route>
        <Route path='/Main' element={<Maintainance/>}></Route>
        <Route path='/card' element={<Card1/>}></Route>
        <Route path="/Pay" element={<Pay/>}></Route>
      <Route path="/Pay1" element={<Pay1/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
