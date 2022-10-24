import React, { useState } from "react";
import Header from "./components/Header";
// react-router-dom package
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
// uuid package
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

function App(){
    // delete feedback
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }


    return (
    <Router>
        <Header />
        <div className='container'>
            <Routes>
                
                <Route exact path="/" element= {        
                    <>          
                        <FeedbackForm handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback={feedback}
                            handleDelete={deleteFeedback}/>
                    </>
                }>

                </Route>
                
                <Route path="/about" element={ <AboutPage /> }></Route>
            
            </Routes>
        </div>
    </Router>

    )
}

export default App