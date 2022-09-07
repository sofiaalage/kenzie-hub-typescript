
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import { ToastContainer } from 'react-toastify'


function App() {


  return (
    <div >
      <header>
        <ToastContainer />
        <Routes>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Routes>
       
      </header>

    </div>
  );
}

export default App;
