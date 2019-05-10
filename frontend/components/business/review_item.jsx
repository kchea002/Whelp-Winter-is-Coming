import React from 'react';
import { Link } from 'react-router-dom';


const ReviewItem = ({ review, author, currentUser, deleteReview }) => {

    const dispatchFunction = (id) => { return () => deleteReview(id); };
    const { body } = review;

    const deleteButton = () => {
        if (currentUser && review.user_id === currentUser.id) {
            return (<button id="delete-button" onClick={dispatchFunction(review.id)}>Delete</button>)
        }
        else { 
            return ( <div> </div>) 
        }
    };

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
                    <div>
                        { deleteButton() }
                    </div>
                </div>
               
            </div>
          
        </li>
    )

}



export default ReviewItem;