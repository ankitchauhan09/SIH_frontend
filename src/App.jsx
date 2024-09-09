import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import SnackbarComponent from "./components/SnackbarComponent";
import Splashscreen from "./components/Splashscreen";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const App = () => {
  const [splashEnded, setSplashEnded] = useState(false);
  const mainPageRef = useRef(null);

  useEffect(() => {
    gsap.set(mainPageRef.current, { opacity: 1 });
    gsap.from(mainPageRef.current, {
      opacity: 0,
      duration: 2,
    });
  });

  return (
    <>
      <Router>
        {!splashEnded ? (
          <Splashscreen setSplashEnded={setSplashEnded} />
        ) : (
          <div>
            <div ref={mainPageRef}>
              <SnackbarComponent>
                <Navbar />
                <Routes>
                  <Route path="/" element={<HeroSection />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/create-account" element={<CreateAccount />} />
                </Routes>
              </SnackbarComponent>
            </div>
          </div>
        )}
      </Router>
    </>
  );
};

export default App;
