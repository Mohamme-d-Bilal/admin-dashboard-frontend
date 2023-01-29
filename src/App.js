import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from './pages/Register';
import Cameras from './pages/Cameras';
import Cases from "./pages/Cases";
import Wardens from "./pages/Wardens";


function App() {
    return (
        <>
            <Router>
                <div className="container">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/Cameras" element={<Cameras />} />
                        <Route path="/Cases" element={<Cases />} />
                        <Route path="/Wardens" element={<Wardens />} />
                    </Routes>
                </div>
            </Router>
            <ToastContainer/>
        </>
    )
}

export default App
