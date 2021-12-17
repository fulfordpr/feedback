import React from 'react'

export default function FeedbackStats({feedback}) {
    const getAvg = () =>{
        let avg = 0
        for(let i = 0; i < feedback.length; i++) {
            avg = avg + feedback[i].rating
        }
        avg = avg/feedback.length
        return avg
    }
    return (
        <>
            <div className="feedback-stats">
                <h4>Reviews: {feedback.length}</h4>
                <h4>Avg Rating: {getAvg()}</h4>
            </div>
        </>
    )
}
