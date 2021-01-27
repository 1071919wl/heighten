import React, {useState, useEffect, useRef} from 'react'


const Review = (props) => {

    
    const [reviewer, setReviewer] = useState("");
    const [review, setReview] = useState("");
    const [score, setScore] = useState();


    function sendMessage(e){
        e.preventDefault();

        const reviewObj = {
            user_id: props.userId,
            product_id: props.product.id,
            score: score,
            reviewer: reviewer,
            review: review
        };

        props.createReview(reviewObj);
    }


    return(
        <div className="review-container">
            <div>
                <div>
                    <h1># Reviews</h1>
                    <p>Stars Rating</p>
                </div>
                <button>Write a Review</button>
            </div>

            <div>
                <h1>Write a Review</h1>
                <form onSubmit={sendMessage}>
                    <p>Indicates a required field</p>

                    <label className="score_radio">Score:
                    {/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_star_rating */}
                        <input type="radio"
                            name='score'
                            value={1}
                            onChange={e => setScore(e.target.value)}
                        />
                        <input type="radio"
                            name='score'
                            value={2}
                            onChange={e => setScore(e.target.value)}
                        />
                        <input type="radio"
                            name='score'
                            value={3}
                            onChange={e => setScore(e.target.value)}
                        />
                        <input type="radio"
                            name='score'
                            value={4}
                            onChange={e => setScore(e.target.value)}
                        />
                        <input type="radio"
                            name='score'
                            value={5}
                            onChange={e => setScore(e.target.value)}
                        />
                    </label>

                    <label>Review:
                        <textarea type="text"
                            value={review}
                            onChange={e => setReview(e.target.value)}
                        />
                    </label>


                    <label>Use your name:
                        <input type="text"
                            value={reviewer}
                            onChange={e => setReviewer(e.target.value)}
                        />
                    </label>
                    <input type='submit' value='POST' />
                </form>
            </div>

        </div>
    )

}

export default Review;