import React from 'react';

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
            <div>
                    <h1>{product.name}</h1>
                    <div>{product.description}</div>
                    <div>${product.price}.00</div>
                    


            </div>
        )
    }
    
}

export default Product;