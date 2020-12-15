import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subtotal: 0
        }

    }
    
    componentDidMount(){
        this.calcTotal()
    }

    allStorage() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }
        // console.log(keys);
        return values;
    }

    deleteStorageItem(objId){
        localStorage.removeItem(objId)
        return this.calcTotal();
    }


    handleInput(field){
        return e => {
            this.setState({[field]: e.target.value})        
        }
    }

    testUpdate(){

    }

    calcTotal(){
        let total = 0;
        this.allStorage().map((el) => {
            total += (JSON.parse(el).quantity * JSON.parse(el).object.price)
        })
        return this.setState({
                subtotal: total
            })
    }

    
    render(){
        return (
            <div className='cartComponent'>
                <div className='cartLeft_contain'>
                    <h2 className='cart_title'>Shopping Cart</h2>
                    <ul>  
                        {this.allStorage().map( (el, i) => ( 
                            <div key={i}>
                                <li key={i} className='cart_item_info'>

                                    <div>
                                        <img src={JSON.parse(el).object.photoUrl} className='cart-item-img'/>
                                    </div>
                                    <div className='cart-item-info'>
                                        <p>{JSON.parse(el).object.name}</p>
                                        <p>{JSON.parse(el).object.price}</p>

                                        <label className='cartQty'>Qty
                                            <input type='number' min='0' 
                                                placeholder={JSON.parse(el).quantity} 
                                                onChange={this.handleInput('quantity')}
                                                className='cart_quantity'
                                            />
                                        </label>
                                    </div> 
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


                                    <br/>
                                    <input type='submit' value='Remove Item'
                                        onClick={() => {
                                            this.deleteStorageItem(JSON.parse(el).object.id)
                                        }}
                                    />
                                </li>
                            </div> 
                        ))}
                    </ul>
                        <input type='submit' onClick={() => this.calcTotal()} value='Recalculate Total'/> 
                    <br/>
                </div> 

                <div className='spacer_cart'></div>

                <div className='cartright_contain'>
                    <h2 className='checkout_title'>Cart Summary</h2>
                    <div>Subtotal</div>
                    <div>${this.state.subtotal}.00</div>
                    <div>Standard Shipping</div>
                    <div>$0.00</div>
                    <div>Order Total</div>
                    <div>${this.state.subtotal}.00</div>
                    <input type='submit' value='Proceed to checkout'/>
                </div> 
            </div> 
        )
    }

}

export default Cart;