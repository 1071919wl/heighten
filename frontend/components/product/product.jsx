import React from 'react';

class Product extends React.Component {
    constructor(props){
        super(props)

    }    

    componentDidMount(){
        this.props.fetchProduct(this.props.productId);
    }

    render(){

        return (
            <div>
                <h1>Product Page</h1>
                
                


            </div>
        )
    }
    
}

export default Product;