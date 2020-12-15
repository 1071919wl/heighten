import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subtotal: 0
        }

    }

    allStorage() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }
        console.log(values);
        return values;
    }

    handleInput(field){
        return e => {
            this.setState({[field]: e.target.value})        
        }
    }

    calcTotal(count){
        return this.setState({
            subtotal: count
        })

    }

    render(){
        let count = 0;
        return (
            <div>
                <div>
                    <ul>  
                        {this.allStorage().map( (el, i) => ( 
                            <li key={i}>
                                {/* <p>{JSON.parse(el).test}</p> */}
                                <p>QUANTITY:{JSON.parse(el).quantity}</p>
                                <p>NAME:{JSON.parse(el).object.name}</p>
                        {count += JSON.parse(el).object.price}
                                <p>PRICE:{JSON.parse(el).object.price}</p>
                                <p>ID:{JSON.parse(el).object.id}</p>
                                {/* <img src={JSON.parse(el).object.photoUrl} /> */}
                                <br/>  
                                {/* {this.calcTotal(JSON.parse(el).object.price)} */}
                                <input type='number' min='0' 
                                    placeholder={JSON.parse(el).quantity} 
                                    onChange={this.handleInput('quantity')}
                                />


                                <input type='submit' value='Update Cart' 
                                    onClick={() => { 
                                        localStorage.setItem(JSON.parse(el).object.id, 
                                            JSON.stringify({ 
                                                'quantity': this.state.quantity, 
                                                'object': JSON.parse(el).object 
                                        
                                            })
                                        )
                                    }
                                }/>
                            </li>
                        ))}
                    </ul>
                    <br/>
                            <h1>Subtotal: {this.state.subtotal}</h1>
                        <input type='submit' onClick={() => this.calcTotal(count)} value='calculate'/> 
                    {/* {JSON.parse(localStorage.getItem('24')).price} */}
                </div> 

                <div>

                </div> 
            </div> 
        )
    }

}

export default Cart;