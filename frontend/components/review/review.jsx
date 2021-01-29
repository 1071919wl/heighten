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

    useEffect(() => {
        props.removeErrors();
    }, [])

    //css star rating
    useEffect(() => {
        let star1 = document.getElementById('star1');
        let star2 = document.getElementById('star2');
        let star3 = document.getElementById('star3');
        let star4 = document.getElementById('star4');
        let star5 = document.getElementById('star5');

        if(score === 1){
            star1.classList.add('goldSelectHold');
            star2.classList.remove('goldSelect');
            star2.classList.remove('goldSelectHold');
            star3.classList.remove('goldSelect');
            star3.classList.remove('goldSelectHold');
            star4.classList.remove('goldSelect');
            star4.classList.remove('goldSelectHold');
            star5.classList.remove('goldSelect');
            star5.classList.remove('goldSelectHold');

        }
        else if(score === 2){
            star1.classList.add('goldSelectHold');
            star2.classList.add('goldSelectHold');

            star3.classList.remove('goldSelect');
            star3.classList.remove('goldSelectHold');
            star4.classList.remove('goldSelect');
            star4.classList.remove('goldSelectHold');
            star5.classList.remove('goldSelect');
            star5.classList.remove('goldSelectHold');
        }
        else if(score === 3){
            star1.classList.add('goldSelectHold');
            star2.classList.add('goldSelectHold');
            star3.classList.add('goldSelectHold');

            star4.classList.remove('goldSelect');
            star4.classList.remove('goldSelectHold');
            star5.classList.remove('goldSelect');
            star5.classList.remove('goldSelectHold');
        }
        else if(score === 4){
            star1.classList.add('goldSelectHold');
            star2.classList.add('goldSelectHold');
            star3.classList.add('goldSelectHold');
            star4.classList.add('goldSelectHold');


            star5.classList.remove('goldSelect');
            star5.classList.remove('goldSelectHold');
        }
        else if(score === 5){
            star1.classList.add('goldSelectHold');
            star2.classList.add('goldSelectHold');
            star3.classList.add('goldSelectHold');
            star4.classList.add('goldSelectHold');   
            star5.classList.add('goldSelectHold');   
        }
    }, [score])


    function renderErrors(){
        return(
            <ul>
                {props.errors.map((error, i) =>(
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    return(
        <div className="review-container">
            <div id="mySidenav" className="sidenav">
                <h1 className='review_instruction'>Write a Review</h1>
                <form onSubmit={sendMessage}>
                    <p className="required_field"><span className='asterisk_review'>*</span>Indicates a required field</p>

                    <label className="score_radio"><span className='asterisk_review'>*</span>Score:</label>

                    <div className='star_list'>

                        {/* <input type="radio"
                            id="r1"
                            name='score'
                            value={1}
                            onChange={e => setScore(e.target.value)}
                        /> */}
                        <span className='goldSelect' htmlFor="r1" id='star5' onClick={() => setScore(5)}>☆</span>

                        <span className='goldSelect' htmlFor="r2" id='star4' onClick={() => setScore(4)}>☆</span>

                        <span className='goldSelect' htmlFor="r3" id='star3' onClick={() => setScore(3)} >☆</span>

                        <span className='goldSelect' htmlFor="r4" id='star2' onClick={() => setScore(2)}>☆</span>

                        <span className='goldSelect' htmlFor="r5"  id='star1' onClick={() => setScore(1)}>☆</span>
                    </div>
                    <div className='review_input_contain'>
                        <label className='review_title'><span className='asterisk_review'>*</span>Review:</label>
                        <textarea type="text"
                            value={review}
                            onChange={e => setReview(e.target.value)}
                            className='review_text_area'
                        />
                        
                        <div className='name_and_post'>
                            <label className='review_name_title'><span className='asterisk_review'>*</span>Use your name:</label>
                            <input type="text"
                                value={reviewer}
                                onChange={e => setReviewer(e.target.value)}
                                className='name_input_area'
                            />
                            
                            <input type='submit' value='POST' className='postButton'/>
                        </div>

                    </div>
                    <div className='review_error_message'>
                            {renderErrors()}
                    </div>
                </form>
            </div>

        </div>
    )

}

export default Review;