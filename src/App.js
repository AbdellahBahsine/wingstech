import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route, Navigate, Link } from "react-router-dom";

import HomePage from './pages/home';
import LoginPage from './pages/login';

export const UserContext = React.createContext();

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if(!localStorage.getItem('currentUser').length){
      setCurrentUser(null)
    } else{
      const user = localStorage.getItem('currentUser')
      setCurrentUser(JSON.parse(user))
    }
  }, [])

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('currentUser')
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="app">
        <header>
          <Link to="/" className="logo">
            Logo
          </Link>

          <nav>
            <Link to="/">Home</Link>
            {
              currentUser ?
              <>
                <Link to="/posts">
                  Posts
                </Link>
                <Link to="/" className="logout-btn">
                  <button onClick={handleLogout}>Logout</button>
                </Link>
              </>
              : 
              <Link to="/login" className="login-btn">
                <button>Login</button>
              </Link>
            }
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route exact path='/login' element={currentUser ? <Navigate to="/posts" /> : <LoginPage />} />
          <Route exact path='/posts' element={currentUser ? <Navigate to="/" /> : <HomePage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
