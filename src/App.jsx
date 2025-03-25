import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Screens/NavBar";
import { Login } from "./Screens/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="bg-purple-500">
          {/* <h1 className='text-3xl font-bold text-white text-center p-4'>Leave Tracker</h1> */}
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
