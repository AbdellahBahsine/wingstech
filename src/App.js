import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import HomePage from './pages/home';
import LoginPage from './pages/login';

function App() {
  return (
    <div className="app">
      <header>
        <Link to="/" className="logo">
          Logo
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/login" className="login-btn">
            <button>Login</button>
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
