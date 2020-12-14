import React from 'react';
import { Link } from 'react-router-dom';


class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCategory(this.props.categoryId);
    }

    test(){
        console.log(this.props.categoryId)
        if(this.props.categoryId === "1"){
            return (
                <p>
                    cat 1
                </p>
            );
        }else if(this.props.categoryId === "2"){
            return (
            <div>
                cat 2
            </div> 
        )}else{
            return (
            <div>
                cat 4
            </div> 
        )}

    }

    render(){
        let category = '';
        this.props.category ? category = this.props.category : category = null
        return (
            category === null ? <div></div> :
            <div className='category_show_page'>
                <div className='category_directory'>
                    <Link to='/'>
                        <span>Home</span>
                    </Link>
                </div>
                {this.test()}
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