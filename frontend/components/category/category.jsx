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

    shuffle(a) {
    var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
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
                <div className='indexContainer'>
                    <div className='indexCenter'>
                        <div >
                            <h1 className='indexTitle'>A human-centered approach to the workplace</h1>
                            <p>Fully makes and sells office furniture that is beautiful, well-built, and designed to create a healthy, supportive workplace where everyone can feel and do their best.</p>
                        </div>
                    </div>
                </div>
                <div className='idxImg'>
                    <img src={window.mainIndexURL} className='menuImg' />
                </div>

                {/* {this.test()} */}

                <div className='index_items_container'>
                    <ul className='index_img_flex'>
                        {this.shuffle(category.products).map( (product, i) =>  (
                            <div className='idx_img_spacer'>
                                <li key={product.id} >
                                    <Link to={`/products/${product.id}`}>
                                        <div className='individual_img'>
                                            <img src={product.photoUrl} />
                                        </div> 
                                    </Link>
                                    <Link to={`/products/${product.id}`}>
                                        <h1 className='idxProductTitle'>{product.name}</h1>
                                        <div className='starts_at_idx'>
                                            <span className='starts_at'>Starts at </span>    
                                            ${product.price}.00
                                        </div>
                                    </Link>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>


            </div>
        )
    }
}

export default Category;