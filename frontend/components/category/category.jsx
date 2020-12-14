import React from 'react';
import { Link } from 'react-router-dom';


class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCategory(this.props.categoryId);
    }

    render(){
        let category = '';
        this.props.category ? category = this.props.category : category = null
        return (
            category === null ? <div></div> :
            <div>
                <div className='product_directory'>
                    <Link to='/'>
                        <span>Home</span>
                    </Link>
                </div>


                <ul>
                    {category.products.map( (product, i) =>  (
                        <li key={i}>
                            <img src={product.photoUrl} />
                            {product.name}
                            {product.price}
                        </li>
                    ))}
                </ul>
                



            </div>
        )
    }
}

export default Category;