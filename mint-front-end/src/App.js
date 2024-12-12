import './App.css';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/register/register.component';
import { Routes, Route, Navigate } from "react-router-dom";
import Redirect from "react-router"
import Home from './routes/home/home.component';
import ResponsiveNavBar from './routes/responsiveappbar/responsiveappbar.component';
import IprStorage from './routes/ipr-storage/ipr-storage.component';
import Patent from './routes/patent/patent.component';
import Forum from './routes/forum/forum.component';
import TrendingTopics from "./components/trending-topics/trending-topic.component";
import { topics, trends, people } from "./utilities/forum-details.utils";
import MentorFind from './routes/mentor/mentor.component';
import ProtectedRoute from './routes/Protected-Routes/ProtectedRoutes';
import Startup from './components/startup/startup.component';
import StartupFeature from './components/startup-features/startups-features.component';
import RegisterType from './components/registertype/registertype.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/auth/login'} />} />
      <Route path='auth'>
        <Route path='login' element={<SignIn />} />
        <Route path='register' element={<RegisterType />} />
      </Route>
      <Route path='individual' element={<SignUp />}></Route>
      <Route path='home' element={
        <ResponsiveNavBar />
      }>
        <Route path='individual' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='startup' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='mentor' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='investor' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='iprManagement' element={<ProtectedRoute><IprStorage /></ProtectedRoute>} />
        <Route path='patent' element={<ProtectedRoute><Patent /></ProtectedRoute>} />
        <Route path='forum' element={<ProtectedRoute><Forum /></ProtectedRoute>}>
          <Route index element={<ProtectedRoute><TrendingTopics topics={topics} trends={trends} people={people} /></ProtectedRoute>} />
          <Route path='mentor' element={<ProtectedRoute><MentorFind /></ProtectedRoute>} />
        </Route>
        <Route path='startupHome' element={<Startup />}>
          <Route index element={<StartupFeature />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
