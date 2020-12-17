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
        console.log(this.state);
        return e => {
            this.setState({
                [field]: e.target.value
            });
        }
    };


    matches(){
        let array = [];

        // console.log('array', this.props.products)
        if (this.state.inputVal.length === 0) {
            return this.props.products;
        }

        this.props.products.forEach(product => {
            let sub = product.name.slice(0, this.state.inputVal.length);
            // console.log('sub',sub)
            if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
                array.push(product.name);
            }
        });

        if (array.length === 0) {
            array.push('No array');
        }
        // console.log('array' , array)
        return array;

    }


    // selectName(event) {
    //     const productName = event.currentTarget.innerText;
    //     this.setState({ input: productName });
    // }


//     render(){
//         // const results = this.matches().map((result, i) => {
//         //     return (
//         //         <li key={i} onClick={this.selectName}>{result.name}</li>
//         //     );
//         // });
        
//         return (
//             <div>
//                 <input value={this.state.input} placeholder='Search for products...' onChange={this.handleInput} />
//                 {/* {products.length} */}

//                 <ul>
//                     {this.matches().map((result, i) => 
//                         <li key={i}>
//                             {result.name}
//                         </li>
//                     )}
                   

//                 </ul>
//             </div> 


//         )
//     }
// }
    render() {
        // let results = this.matches().map((result, i) => {
        //     console.log(result.name)
        //     return (
        //     <li key={i} className='notWorking'>{result.name}hello</li>
        //     );
        // });
            
        let results = this.matches().map((result, i) => {
            console.log(result.name)
            return (
            <li key={i} className='notWorking'>{result.name}hello</li>
            );
        });
        
        return (
            <div>
                <h1>Autocomplete</h1>
                <div>
                    <input type='text' onChange={this.handleInput('inputVal')} placeholder='Search...' />
                    <ul>
                        {results}
                    </ul>
                </div>
            </div>
        );
    }
};

export default Search;