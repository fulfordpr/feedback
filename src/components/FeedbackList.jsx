import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

    return (
        <>
            {feedback.map((item) => (
            <FeedbackItem
            text={item.text}
            rating={item.rating}
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            />))}
        </>
    )
}
