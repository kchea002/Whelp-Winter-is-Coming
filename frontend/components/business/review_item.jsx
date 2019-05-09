import React from 'react';
import { Link } from 'react-router-dom';


const ReviewItem = ({ business, review, author, currentUser, deleteReview }) => {


    return (
        <li>
            <div className="review-container">   
                <div className="user-info"> 
                    <img className="user-info-photo" src={author.photo} />
                    <div className="user-name">
                        <h1 className="review-name">{author.first_name} {author.last_name}</h1>
                        <h1 className="review-house">{author.house}</h1>
                    </div>
                </div>
                <div className="body-container">
                    <div>{review.rating} stars</div>
                    <div className="review-body">{review.body}</div>
                    
                </div>
               
            </div>
          
        </li>
    )

}



export default ReviewItem;