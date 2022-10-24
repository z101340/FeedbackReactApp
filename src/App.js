import React, { useState } from "react";
import Header from "./components/Header";
// react-router-dom package
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink"

function App(){

    return (
    <FeedbackProvider>
    <Router>
        <Header />
        <div className='container'>
            <Routes>
                
                <Route exact path="/" element= {        
                    <>          
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                        <AboutIconLink />
                    </>
                }>

                </Route>
                
                <Route path="/about" element={ <AboutPage /> }></Route>
            </Routes>
        </div>
    </Router>
    </FeedbackProvider>
    )
}

export default App