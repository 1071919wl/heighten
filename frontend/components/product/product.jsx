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
                    <span>{product.category}</span>
                    </Link>
                    <div>/</div>
                    <span>{product.name}</span>
                    
                </div>
                <div className='main_content'>
                    <div className='content_arrangement'>
                        <div className='show_img'>
                            <img src={product.photoUrl} />
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
            </div>
        )
    }
    
}

export default Product;