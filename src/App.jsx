import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import SnackbarComponent from "./components/SnackbarComponent";
import Splashscreen from "./components/Splashscreen";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import SearchJobs from "./components/SearchJobs";
import {UserProvider} from "./contexts/UserContext";
import RecruiterSection from "./components/RecruiterSection.jsx";
import Companies from "./components/Companies.jsx";
import OAuthCallback from "./callbacks/OAuthCallback.jsx";
import ProfileSection from "./components/ProfileSection.jsx";

const App = () => {
    const [splashEnded, setSplashEnded] = useState(false);
    const mainPageRef = useRef(null);
    // const {setUser} = useUser()
    useEffect(() => {
        gsap.set(mainPageRef.current, {opacity: 1});
        gsap.from(mainPageRef.current, {
            opacity: 0,
            duration: 2,
        });
    });

    // useEffect(() => {
    //     // Check if there's a token in local storage
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         // If a token exists, set the user state accordingly
    //         // You may want to fetch user data from your API here
    //         const userData = JSON.parse(localStorage.getItem('user')); // Adjust based on your storage
    //         setUser(userData);
    //     }
    // }, [setUser]);

    return (
        <>
            <UserProvider>
                    <Router>
                        {!splashEnded ? (
                            <Splashscreen setSplashEnded={setSplashEnded}/>
                        ) : (
                            <div>
                                <div ref={mainPageRef}>
                                    <SnackbarComponent>
                                        <Navbar/>
                                        <Routes>
                                            <Route path="/" element={<HeroSection/>}/>
                                            <Route path="/login" element={<Login/>}/>
                                            <Route path="/create-account" element={<CreateAccount/>}/>
                                            <Route path="/get-jobs" element={<SearchJobs/>}/>
                                            <Route path="/hire" element={<RecruiterSection/>}/>
                                            <Route path="/companies" element={<Companies/>}/>
                                            <Route path="/oauth/callback" element={<OAuthCallback/>}/>
                                            <Route path="/profile/user/:userId" element={<ProfileSection/>}/>
                                        </Routes>
                                    </SnackbarComponent>
                                </div>
                            </div>
                        )}
                    </Router>
            </UserProvider>
        </>
    );
};

export default App;
