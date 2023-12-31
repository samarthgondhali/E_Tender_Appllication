import { Routes , Route , Outlet } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar';
import Register from './RegistrationForm';
import LoginPage from './LoginPage';
import Search from './SearchResultBar';
import Search1 from './SearchResultsBarWorking';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import UserDetails from './UserDetailsPageTable';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import TenderSubmit from './TenderSubmit1';
import LogOut from './LogOut';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Navbar></Navbar>}>
            <Route path='/Search' element={<Search></Search>}></Route>
            <Route path="/LogOut" element={<LogOut></LogOut>}></Route>
            <Route path='/Search1' element={<Search1></Search1>}></Route>
            <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
            <Route path='/Register' element={<Register></Register>}></Route>
            <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
            <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
            <Route path='/UserDetails' element={
            <PrivateRoute><UserDetails></UserDetails></PrivateRoute>
            }></Route>
            <Route path="/TenderSubmit" element={
              <PrivateRoute><TenderSubmit></TenderSubmit></PrivateRoute>}
            ></Route>
          </Route>
          
        </Routes>
      </header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
