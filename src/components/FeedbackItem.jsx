import React from 'react'
import {FaTimes} from 'react-icons/fa'

export default function FeedbackItem({item, handleDelete}) {
    // const [rating, setRating] = useState(7)
    // const [text,setText] = useState('This is an example of aFeedback Item')
    return (
        <>
            <div className="card">
                <div className="num-display">{item.rating}</div>
                <button className="close"
                onClick={() => handleDelete(item.id)}> 
                    <FaTimes color="purple"/>
                </button>
                <div className="text-display">{item.text}</div>
            </div>
        </>
    )
}
