import React from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ''
        };

        this.handleInput = this.handleInput.bind(this);

        // this.selectName = this.selectName.bind(this);
    }

    componentDidMount() {
        this.props.fetchProducts()
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

    // selectName(event) {
    //     const productName = event.currentTarget.innerText;
    //     this.setState({ input: productName });
    // }

    render() {
        
        let results = this.matches().map((result, i) => {
            if(result === 'No match'){
                console.log(result)
                return (
                <li key={i} className='notWorking'>There are no results for "{this.state.inputVal}".</li>
                );
            }else{
                return (
                    <li key={i} className='notWorking'>{result.name}</li>
                );
            }
        });
        
        return (
            <div>
                <h1>Autocomplete</h1>
                <div>
                    <input type='text' onChange={this.handleInput('inputVal')} placeholder='Search for products...' value={this.state.inputVal} />
                    <ul>
                        {results}
                    </ul>
                </div>
            </div>
        );
    }
};

export default Search;