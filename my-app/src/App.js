import './App.css';
import NavBar from './NavBar/NavBar';
import MainPage from './MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import Team from './Team/Team';
import Winner from'./Winner/Winner';
import Gouls from'./Gouls/Gouls';
import Couch from './Couch/Couch';
function App() {
  return (
    <>
<NavBar/>

<Routes>
<Route path='/' Component={MainPage}/>
<Route path='/team' Component={Team}/>
<Route path='/winner' Component={Winner}/>
<Route path='/gouls' Component={Gouls}/>
<Route path='/couch' Component={Couch}/>
</Routes>
{/* <MainPage/> */}
    </>
  );
}

export default App;
