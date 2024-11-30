import './App.css';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/register/register.component';
// import Authentication from './routes/authentication/authentication.component';
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './routes/home/home.component';
import ResponsiveNavBar from './routes/responsiveappbar/responsiveappbar.component';
import IprStorage from './routes/ipr-storage/ipr-storage.component';
import Patent from './routes/patent/patent.component';
import Forum from './routes/forum/forum.component';
import TrendingTopics from "../src/components/trending-topics/trending-topic.component"
import { topics, trends, people } from "./utilities/forum-details.utils"
import MentorFind from './routes/mentor/mentor.component';

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
        <Route path='iprManagement' element={<IprStorage />}></Route>
        <Route path='patent' element={<Patent />}></Route>
        <Route path='forum' element={<Forum />}>
          <Route index element={<TrendingTopics topics={topics} trends={trends} people={people} />}></Route>
          <Route path='mentor' element={<MentorFind />}></Route>
        </Route>
      </Route>

    </Routes>

  );
}

export default App;
