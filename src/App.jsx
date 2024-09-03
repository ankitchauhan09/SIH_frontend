import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import SnackbarComponent from "./components/SnackbarComponent";

const App = () => {
  return (
    <SnackbarComponent>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </Router>
    </SnackbarComponent>
  );
};

export default App;
