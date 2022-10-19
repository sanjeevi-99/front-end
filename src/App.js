import './App.css';
import Signup from './components/Signup';
import Menu from './components/Menu';
import Home from './components/Home';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/signup' replace />} />
        <Route
          path="/signup"
          exact
          element={<Signup />}
        />
        <Route
          path="/menu"
          exact
          element={<Menu />}
        />
        <Route
          path="/home"
          exact
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
