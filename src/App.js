import "./App.css";
import Kumar from "./Componets/Kumar";
import Charan from "./Componets/Charan";
import Praveen from "./Componets/Praveen";
import ContactUs from "./Componets/ContactUs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Componets/Home";

function App() {
  return (
    <div className="">
      <Router>
        <header className="">
          <nav>
            <Link to="/">Home</Link> |<Link to="/ContactUs">Contact Us</Link> |
            <Link to="/Charan">Charan</Link> |<Link to="/Praveen">Praveen</Link>{" "}
            |<Link to="/Kumar">Kumar</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Kumar" element={<Kumar />} />
          <Route path="/Charan" element={<Charan />} />
          <Route path="/Praveen" element={<Praveen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
