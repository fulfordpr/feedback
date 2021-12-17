import React from 'react'
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList.jsx'
import FeedbackData from './data/feedbackData.js'
import FeedbackStats from './components/FeedbackStats.jsx'
import {useState} from 'react'

export default function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) =>{
        const newFeedback = [...feedback]
        if(window.confirm('Are you sure you want to delete this?')){
            for (let i = 0; i < newFeedback.length; i++){
                if (newFeedback[i].id === id){
                    newFeedback.splice(i, 1)
                }
            }
            setFeedback(newFeedback)
        }
    }

    return (
        <div>
            <Header text={'Feedack UI'}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
    )
}
