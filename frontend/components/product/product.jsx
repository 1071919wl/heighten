import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {
    constructor(props){
        super(props)

    }    

    componentDidMount(){
        this.props.fetchProduct(this.props.productId);
    }
    
    render(){
        let product = '';
        this.props.product ? product = this.props.product : product = null

       
        
        return (
            product === null ? <div></div> :
            <div className='product_show_page'>
                <div className='product_directory'>
                    <Link to='/'>
                        <span>Home</span>
                    </Link>
                    <div>/</div>
                    <Link to='/'>
                    <span>{product.category[0].toUpperCase()+product.category.slice(1)}s</span>
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
                            <input type='submit' value='Add to Cart' className='addToCart'/>   
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
                    
                    <h1 className='option_accessory'>Options & Accessories</h1>

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
            </div>
        )
    }
    
}

export default Product;