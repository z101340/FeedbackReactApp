import React, { useState } from "react";
import Header from "./components/Header";
// react-router-dom package
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
// uuid package
import { v4 as uuidv4 } from "uuid";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import FeedbackData from "./data/FeedbackData";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink"

function App(){
    // delete feedback
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }


    return (
    <FeedbackProvider>
    <Router>
        <Header />
        <div className='container'>
            <Routes>
                
                <Route exact path="/" element= {        
                    <>          
                        <FeedbackForm handleAdd={addFeedback}/>
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