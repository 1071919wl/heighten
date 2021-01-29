import React from 'react';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.searchcloseNav = this.searchcloseNav.bind(this);


        this.handleClickOutside = this.handleClickOutside.bind(this);
    }


    componentDidMount() {
        this.props.fetchProducts()

        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(e) {
        let input = document.getElementById('input');
        if(e.target && !e.target.matches("li.searchList") && e.target !== input){
            this.setState({
                inputVal: ''
            })
            this.searchcloseNav()
        }

    }

    componentWillUnmount() {
        // this.setState({
        //     inputVal: ''
        // })
        // this.searchcloseNav()
        document.removeEventListener('mousedown', this.handleClickOutside);
    }




    handleInput(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            });
        }
    };


    matches(){
        let array = [];

        if (this.state.inputVal.length === 0) {
            return [];
        }

        this.props.products.forEach(product => {
            let smallWord = product.name.toLowerCase();
            if (smallWord.includes(this.state.inputVal.toLowerCase())) {
                array.push(product);
            }

        });

        if (array.length === 0) {
            array.push('No match');
        }
        return array;

    }

    searchcloseNav() {
        document.getElementById("mySearchnav").style.height = "0";
        document.getElementById('theSearchContent').style.zIndex = '-1';

    }



    render() {
        let results = this.matches().map((result, i) => {
            if(result === 'No match'){
                return (
                    <li key={i} className='searchList'>There are no results for "{this.state.inputVal}".</li>
                );
            }else{
                return (
                    <Link to={`/products/${result.id}`} key={result.id}>
                        <li key={result.id} className='searchList'>{result.name}</li>
                    </Link>
                );
            }
        });
        
        return (
            <div>
                <div className='divWrapInput' id='mySearchnav'>
                    <div className='searchAndClose'>
                        <input type='text' onChange={this.handleInput('inputVal')} 
                            placeholder='Search for products...' 
                            value={this.state.inputVal} 
                            className='searchInput'
                            id='input'
                        />
                        <button className="searchclosebtn" onClick={()=>this.searchcloseNav()} >&times;</button>
                    </div>
                    <ul id='list'>
                        {results}
                    </ul>
                </div>
            </div>
        );
    }
};

export default Search;