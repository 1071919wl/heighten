import React from 'react';
import { Link } from 'react-router-dom';
// import Review from '../review/review';
import ReviewContainer from '../review/review_container';

class Product extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            quantity: 1,
            info: 1,

            update: false,
            reviewId: 0,
            reviewer: '',
            review: '',
            score: null,
            productId: null,
            create: false,
        }

        this.updateSection = this.updateSection.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.averageReview = this.averageReview.bind(this);
        this.starAmt = this.starAmt.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.deleteReview = this.deleteReview.bind(this);

        
        
    }   
    

    componentDidMount(){
        this.props.fetchProduct(this.props.productId);
        
    }


    componentDidUpdate(prevProps) {
        if (prevProps.productId !== this.props.productId) {
            this.props.fetchProduct(this.props.productId);
        }
        if( this.state.create){

            this.props.fetchProduct(this.props.productId);
            this.setState({reviewId: 0})
            this.setState({create: false})
        }
        

    }

    componentWillUnmount() {
        this.props.removeErrors();
    }


    handleInput(field){
        return e => {
         this.setState({[field]: e.target.value})
        }
    }

    cartValidate(product) {
        if(this.state.quantity > 0){
            return localStorage.setItem(product.id, JSON.stringify({ 'quantity': this.state.quantity, 'object': product }))
        }
    }

    handleAddedInfo(){
        if(this.state.info === 1){
            return (
                <div>
                    <div className='otherContainer'>
                        <div>
                            <h2>Wire management grommets</h2>
                            <p>
                                Wire management grommets are either situated in the center or on the back left and right corners of your desktop. The drilled openings are circular and measure 80mm (approximately 3.15") in diameter. The covers measure 95mm (3.75") across.
                                </p>
                            <h2>
                                Power upgrade
                                </h2>
                            <p>
                                We also offer powered grommets, which are also available in black or white. Our powered grommets include one AC outlet, one USB-C and one USB-A port, so you can plug in up to 3 devices per grommet. You have the option upgrade one or both of your grommets, or not at all.
                                For easy desktop access to extra outlets and ports, try our Clamp-Mounted Power Strip. Fully compatible with 3 outlets, one USB-C and one USB-A charging ports, this convenient little power source is designed to give you all the power you need without having to crawl under your desk or add grommet holes to your desktop.
                                </p>
                        </div>
                        <div>
                            <img src={window.other1URL} />
                        </div>
                    </div >
                    <div className='other2Container'>
                        <div>
                            <img src={window.other2URL} />
                        </div>
                        <div>
                            <h2>Designed for supported standing</h2>
                            <p>
                                Supported-standing chairs put you in a leaning position relieves lower back pain caused by sitting on your tailbone and gives the right amount of support to activate your body’s natural ability to find balance.
                                Luna - The charming and affordable Luna stool brings healthy alignment, support, and motion to your adjustable-height desk.
                                ILOA - A true saddle chair, opens angle of hips to encourage your spine into a natural curve.
                                </p>
                        </div>
                    </div>
                    <div className='other3Container'>
                        <div>
                            <h2>Handset options</h2>
                            <p>
                                Jarvis is available with our Up-down toggle handset or an upgraded OLED touch programmable handset option with a height indicator screen. The Up-down toggle handset leverages natural arm motion for intuitive adjustment: press down to lower and lift up to raise it. Our OLED touch programmable handset improves access to the customizable features and functions of your Jarvis.
                                </p>
                            <ul>
                                <li>
                                    Up-down toggle handset: 1" x 1"
                                    </li>
                                <li>
                                    OLED touch programmable handset: 1.3" x 6"
                                    </li>
                            </ul>
                        </div>
                        <div>
                            <img src={window.other3URL} />
                        </div>
                    </div>
                    <div className='other4Container'>
                        <div>
                            <img src={window.other4URL} />
                        </div>
                        <div>
                            <h2>Balance boards</h2>
                            <h3>
                                Floatdeck Balance Board
                                </h3>
                            <p>
                                Crafted for effortless, intuitive motion, Floatdeck keeps your joints loose and body aligned, while subtly strengthening your stabilizing muscles (core, hips, knees) during long periods of standing.
                                </p>
                            <ul>
                                <li>
                                    29.5" wide x 12.2" deep
                                    </li>
                            </ul>
                            <h3>
                                Tic Toc Stand
                                </h3>
                            <p>
                                Developed around the principles that movement is healthy, Tic Toc Stand is designed not so much to make you move, as to move with you when you naturally shift your weight side to side—or front to back, if you want to mix things up.
                                </p>
                            <ul>
                                <li>
                                    17.6" wide x 11.5" deep
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>


            )
        }else if (this.state.info === 2){
            return (
                <div>
                    <div className='otherContainer'>
                        <div>
                            <h2>Warranty</h2>
                            <ul>
                                <li>10 year warranty on all desk frame components, mechanical parts, motors, and electrical components</li>
                                <li>5 year warranty on desktop surfaces, excluding normal wear and tear, and damage caused by improper assembly, disassembly or repair</li>
                            </ul>
                            
                            <h2>
                                Certifications
                            </h2>
                            <ul>
                                <li>BIFMA level® 3 certified</li>
                                <li>Rated SMART© Sustainable Platinum</li>
                                <li>GREENGUARD and GREENGUARD Gold Certified</li>
                                <li>Can contribute to U.S. Green Building Council LEED® certification</li>
                            </ul>

                            <h2>
                                Shipping Details
                            </h2>
                            <ul>
                                <li>Ships via FedEx Ground from Portland, OR and Nottingham, MD.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }

    averageReview(product){
        let scoreSum = 0;
        {product.reviews.map((review, i) => (
                scoreSum += review.score
            )
        )}
        let avg = scoreSum / product.reviews.length;
        return (
            <div className='star_container'>
                <div className='avgNum'>
                    {avg ? avg.toFixed(1) : <p>No Reviews</p>}
                </div>
                <div>
                    {this.starAmt(avg)}
                </div>
            </div>
        )

    }

    starAmt(score){
        if( score === 0 || !score ){
            return(
                <div className='star'>
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
            )
        }else if( score >= 1 && score < 2){
            return(
                <div className='star'>
                    <span className='gold'>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
            )
        }else if ( score >= 2 && score < 3){
            return(
                <div className='star'>
                    <span className='gold'>☆</span><span className='gold'>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
            )
        }else if ( score >= 3 && score < 4){
            return(
                <div className='star'>
                    <span className='gold'>☆</span><span className='gold'>☆</span><span className='gold'>☆</span><span>☆</span><span>☆</span>
                </div>
            )
        }else if ( score >= 4 && score < 5){
            return(
                <div className='star'>
                    <span className='gold'>☆</span><span className='gold'>☆</span><span className='gold'>☆</span><span className='gold'>☆</span><span>☆</span>
                </div>
            )
        }else{
            return(
                <div className='star'>
                    <span className='gold'>☆</span><span className='gold'>☆</span><span className='gold'>☆</span><span className='gold'>☆</span><span className='gold'>☆</span>
                </div>
            )
        }

    }

    sendMessage(e){
        e.preventDefault();
        const reviewObj = {
            id: this.state.reviewId,
            user_id: this.props.userId,
            product_id: this.props.productId,
            score: this.state.score,
            reviewer: this.state.reviewer,
            review: this.state.review
        };

        this.props.updateReview(reviewObj).then(res => {
            this.setState({create: true})
        })
        
    }

    deleteReview(id){
        this.props.deleteReview(id);
        this.setState({create: true})
    }


    updateSection(review, i){
        // const deleteReview = this.props.deleteReview;
        // console.log('need date', review.created_at)
        if( this.state.reviewId !== review.id){
            return(
                <li key={i} className='review_individual_list'>
                    <div className='review-update-delete'>
                        <div className='review_indiv_name'>
                            {review.reviewer}
                        </div>
                        <div>
                            {review.user_id === this.props.userId ?
                            <div>
                                <input type='submit' className='indv_update' onClick={() => this.setState({reviewId: review.id, review: review.review, reviewer: review.reviewer, score: review.score})} value='Edit'/>
                                <input type='submit' className='indv_delete' onClick={() => this.deleteReview(review.id)} value='Delete'/>
                            </div>
                            :
                            null
                            }
                        </div>
                    </div>

                    <div className='review_indiv_score' >
                        {this.starAmt( review.score ) }
                    </div>
                    <div className='review_indiv_review' >
                        {review.review}
                    </div>
                    
                </li>   
            )
        }else{
            return(
                <div key={i}>
                    <form onSubmit={this.sendMessage} key={i} className='update_Form' key={i}>
                        <label>Score:</label>
                        <select onChange={this.handleInput('score')} className='score_update'>
                            <option value={this.state.score} >Score</option>
                            <option value={1} >1 Star</option>
                            <option value={2} >2 Star</option>
                            <option value={3} >3 Star</option>
                            <option value={4} >4 Star</option>
                            <option value={5} >5 Star</option>
                        </select>


                        <label>Review:</label>
                        <textarea type="text"
                            value={this.state.review}
                            onChange={this.handleInput('review')}
                            className='update_text_area'
                        />
                        

                        <label>Use your name:</label>
                        <input type="text"
                            value={this.state.reviewer}
                            onChange={this.handleInput('reviewer')}
                            className='name_update_area'
                        />
                        <div className='edit_button_options'>
                            <div>
                                <input type='submit' value='Save Changes' className="saveButtonUpdate"/>
                            </div>
                            <div>
                                <button className="cancelButtonUpdate" onClick={() => this.setState({reviewId: 0})}>Cancel</button>
                            </div>
                        </div>
                    </form>
                    <div className='review_error_message'>
                        {this.renderErrors()}
                    </div>
                </div>
            )
        }
    }

    openNav() {

        // document.getElementById("mySidenav").style.height = "620px";
        if (document.getElementById("mySidenav").style.height === '620px' ){
            document.getElementById("mySidenav").style.height = "0";
        }else{
            document.getElementById("mySidenav").style.height = "620px";
        }

    }

    closeNav() {
        document.getElementById("mySidenav").style.height = "0";
    }


    renderErrors(){
        return(
            <ul>
                {this.props.reviewErrors.map((error, i) =>(
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render(){
        let product = '';
        let currId = null;

        this.props.product ? product = this.props.product : product = null
        this.props.product ? currId = this.props.product.type_id : currId = null


        return (
            product === null ? <div></div> :
            <div className='product_show_page'>
                {/* {currId === null ? this.setState({ redirect: '/Error404PageNotFound'}) : null} */}
                <div className='product_directory'>
                    <Link to='/'>
                        <span>home</span>
                    </Link>
                        <div>/</div>
                    <Link to={`/categories/${currId}`}>
                        {/* <span>{product.category[0].toUpperCase()+product.category.slice(1)}</span> */}
                            <span>{product.category}</span>
                    </Link>
                    <div>/</div>
                    <span className='productName'>{product.name}</span>
                    
                </div>
                <div className='main_content'>
                    <div className='content_arrangement'>
                        <div className='show_img'>
                            <img src={product.photoUrl} />
                            <div className='shipping'>Free Shipping and 30-day returns*</div>
                        </div>
                        <div className='content_info'>
                            <h1 className='title'>{product.name}</h1>
                            <div>
                                <span className='starts_at'>Starts at </span>    
                                ${product.price}.00
                            </div> 
                            <div className='product_description'>{product.description}</div>


                            <label className='productQty'>Qty  
                                <input type='number' min='0' placeholder='1' onChange={this.handleInput('quantity')} className='quantityInput'/>
                            </label>




                                <input type='submit' value='Add to Cart' className='addToCart' 
                                    // onClick={() => { localStorage.setItem(product.id, JSON.stringify({ 'quantity': this.state.quantity, 'object': product }))}}
                                    onClick={() => {this.cartValidate(product)}}
                                />


                                
                            <div className='shopbox'>
                                <div className='test'>
                                    <div className='showBox_container'>
                                        <img src={window.shopboxURL} />
                                    </div>
                                    <div className='shopbox_info'>
                                        <h1>Shopping for your team? Reach out to get a quote!</h1>
                                        <p>Whether you're an office of 5 or 500, our project managers can help you create energizing spaces your team will love.</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div>
                    
                    <div className='option_accessory'>
                        <input type='submit' onClick={() => { this.setState({ info: 1}) }} value='Options & Accessories' className='option_accessory1'/>
                        <input type='submit' onClick={() => { this.setState({ info: 2 }) }} value='Specifications' className='option_accessory2'/>
                    </div>

                        {this.handleAddedInfo()}

                        

                </div>
                <div className='reviewContainer'>
                    <div className="reviewHeader">
                        <div>
                            <h1 className='reviewLength'>{product.reviews.length} Reviews</h1>
                            <div className='avgReview'>
                                <div>{this.averageReview(product)}</div>
                            </div>
                        </div>

                        <button className="writeReview thecloseBtn" onClick={()=>this.openNav()}>Write a Review</button>
                    </div>

                    
                    <div>
                        <ReviewContainer product={product}/>
                    </div>

                    <div className='reviews_container'>
                        {product.reviews.map((review, i) => (
                                this.updateSection(review, i)
                            )
                        )}
                    </div>
                </div>

            </div>
        )
    }
    
}

export default Product;