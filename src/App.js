import './App.css';
import Signup from './components/Signup';
import Menu from './components/Menu';
import Home from './components/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path="/signup"
            exact
            element={<Signup/>}
        />
          <Route
            path="/menu"
            exact
            element={<Menu/>}
        />
         <Route
            path="/home"
            exact
            element={<Home/>}
        />
  </Routes>
    </BrowserRouter>
    
  );
}

export default App;
