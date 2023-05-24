
import './App.css';
import LoginPage from './components/LoginPage';
import TaskPage from './components/TaskPage';
import SignInPage from './components/SignInPage';
import { Routes,Route } from 'react-router-dom';
import ProtectedRoute from './services/ProtectedRoute';

function App() {
  return (
    <div className="App">

    <Routes>
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/signin' element={<SignInPage/>}/>

    <Route path='/' element={<ProtectedRoute/>}>
    <Route path='/' element={<TaskPage/>}/>  
    </Route> 
     </Routes>
    </div>
  );
}

export default App;
