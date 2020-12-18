import React from 'react';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ''
        };

        this.handleInput = this.handleInput.bind(this);
    }


    componentDidMount() {
        this.props.fetchProducts()
    }

    // componentWillUnmount() {
    //     this.setState({
    //         inputVal: ''
    //     })
    // }



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

    render() {
        
        let results = this.matches().map((result) => {
            if(result === 'No match'){
                return (
                    <li key={result.id} className='notWorking'>There are no results for "{this.state.inputVal}".</li>
                );
            }else{
                return (
                    <Link to={`/products/${result.id}`} key={result.id}>
                        <li key={result.id} className='notWorking'>{result.name}</li>
                    </Link>
                );
            }
        });
        
        return (
            <div>
                <div>
                    <input type='text' onChange={this.handleInput('inputVal')} 
                        placeholder='Search for products...' 
                        value={this.state.inputVal} 
                        className='searchInput'
                    />
                    <ul>
                        {results}
                    </ul>
                </div>
            </div>
        );
    }
};

export default Search;