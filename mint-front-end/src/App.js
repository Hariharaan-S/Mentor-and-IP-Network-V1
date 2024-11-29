import './App.css';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/register/register.component';
// import Authentication from './routes/authentication/authentication.component';
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './routes/home/home.component';
import ResponsiveNavBar from './routes/responsiveappbar/responsiveappbar.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/auth/login'} />}></Route>
      <Route path='auth'>
        <Route path='login' element={<SignIn />}></Route>
        <Route path='register' element={<SignUp />}></Route>
      </Route>
      <Route path='home' element={<ResponsiveNavBar />}>
        <Route path='individual' element={<Home />}></Route>
      </Route>

    </Routes>

  );
}

export default App;
