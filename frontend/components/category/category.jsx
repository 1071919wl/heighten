import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Category extends React.Component {
    constructor(props) {
        super(props);

        this.state= {

            filter: 'mostPopular',
            redirect: null

        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.props.fetchCategory(this.props.categoryId);
    }


    // fixes the issue of page not rendering when you navigate from cat1 to cat2 to etc
    componentDidUpdate(prevProps){
        if(prevProps.categoryId !== this.props.categoryId){
            this.props.fetchCategory(this.props.categoryId);
        }
    }

    indexPages(){
        if(this.props.categoryId === "8"){
        // if(this.props.categoryId === "1"){
            return (
                <div>
                    <div className='indexContainer'>
                        <div className='indexCenter'>
                            <div >
                                <h1 className='indexTitle'>A human-centered approach to the workplace</h1>
                                <p>Fully makes and sells office furniture that is beautiful, well-built, and designed to create a healthy, supportive workplace where everyone can feel and do their best.</p>
                            </div>
                        </div>
                    </div>
                    <div className='idxImg'>
                        <img src={window.wrkplcURL} className='menuImg' />
                    </div>
                </div>
            );
        }else if(this.props.categoryId === "9"){
        // }else if(this.props.categoryId === "2"){
            return (
            <div>
                <div className='indexContainer'>
                    <div className='indexCenter'>
                        <div >
                            <h1 className='indexTitle'>Ergonomic Office Chairs</h1>
                            <p>Active sitting can make a big difference. Our ergonomic office chairs and stools help keep your body moving, your blood flowing, and your mind engaged so you can be your full, beautiful self at work.</p>
                        </div>
                    </div>
                </div>
                <div className='idxImg'>
                    <img src={window.chrURL} className='menuImg' />
                </div>
            </div> 
        )}else if(this.props.categoryId === '10'){
        // )}else if(this.props.categoryId === '3'){
            return (
            <div>
                <div className='indexContainer'>
                    <div className='indexCenter'>
                        <div >
                            <h1 className='indexTitle'>Accessories</h1>
                            <p>Like our desks and chairs, our accessories were designed to better support the human body. If you have questions about how monitor arms, LED lamps, keyboard trays, or standing mats help create a healthier workspace, please give us a call.</p>
                        </div>
                    </div>
                </div>
                <div className='idxImg'>
                    <img src={window.mainIndexURL} className='menuImg' />
                </div>
            </div> 
        )}else{
            this.setState({redirect: '/Error404PageNotFound'})
        }

    }

    handleSelect(e){
        this.setState({
            filter: e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        
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

    filterName(objs) {
        if(this.state.filter === 'mostPopular'){
            return this.shuffle(objs)
        }else if( this.state.filter === 'productName' ){
            objs.sort(function(a, b){
                if(a.name < b.name){
                    return -1;
                }else if ( a.name > b.name){
                    return 1;
                }else{
                    return 0;
                }
            })
        }else{
            objs.sort(function (a, b) {
                if (a.price < b.price) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            })
        }
        return objs;
    }

    render(){
        let category = '';
        this.props.category ? category = this.props.category : category = null

        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }

        return (
            category === null ? <div></div> :
            <div className='category_show_page'>
                <div className='category_directory'>
                    <Link to='/'>
                        <span>Home</span>
                    </Link>
                </div>

                {this.indexPages()}
                <div className='indexAmt'>View all - {category.products.length} Items</div>

                    <form onSubmit={this.handleSubmit} className='selectForm'> <div className='sortby'>Sort By</div>
                        <select value={this.state.filter} onChange={this.handleSelect}>
                            <option defaultValue='mostPopular'>Most Popular</option>
                            <option value='productName'>Product Name</option>
                            <option value='price'>Price</option>
                        </select>
                    </form>
                
                <div className='index_items_container'>
                    <ul className='index_img_flex'>
                        {this.filterName(category.products).map((product, i) => (
                            <div key={i} className='idx_img_spacer'>
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
                                            <div className='dollar_amt'>${product.price}.00</div>

                                        </div>
                                    </Link>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className='idxSpacing'></div>

                <div className='idx_sec'>
                    <div>
                        <img src={window.ergoIndexURL} className='ergoIndex_img' />
                    </div>
                    <div className='idxSpacing2'></div>
                    <div className='idx_sec_sent'>
                        <h1>What "ergonomic" really means for you</h1>
                        <p>Something labeled “ergonomic” isn't going to fix all of our workplace pain. The key is creating a space that encourages movement, work flow, and showing up as your full self, in both mind and body.</p>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Category;