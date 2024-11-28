import './App.css';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/register/register.component';
// import Authentication from './routes/authentication/authentication.component';
import { Routes, Route } from "react-router-dom"
import Home from './routes/authentication/home/home.component';
import Navigation from './routes/navigation/navigation.component';

function App() {
  return (
    <Routes>
      <Route path='auth'>
        <Route path='login' element={<SignIn />}></Route>
        <Route path='register' element={<SignUp />}></Route>
      </Route>
      <Route path='home' element={<Navigation />}>
        <Route path='individual' element={<Home />}></Route>
      </Route>

    </Routes>

  );
}

export default App;
