import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subtotal: 0,
            quantity: 0
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

    cartUpdate(obj){
        localStorage.setItem(obj.id,
            JSON.stringify({
                'quantity': this.state.quantity,
                'object': obj
            })
        )

        return this.calcTotal();

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

    multiplier(price, quantity){
        return price * quantity;
    }

    
    render(){
        return (
            <div className='cartComponent'>
                <div className='cartLeft_contain'>
                    <h2 className='cart_title'>Shopping Cart</h2>
                    <ul>  
                        {this.allStorage().map( (el, i) => ( 
                            <div key={i}>
                                <li key={i} className='cart_item_container'>

                                    <img src={JSON.parse(el).object.photoUrl} className='cart-item-img'/>
                                    
                                    <div className='cart-item-info'>
                                        <div className='toFlex'>
                                            <p className='nameoftheItem'>{JSON.parse(el).object.name}</p>
                                            {/* <p className='cart_cost_per'>$ {JSON.parse(el).object.price}.00</p> */}
                                            <p className='cart_cost_total'>$ {this.multiplier(JSON.parse(el).object.price, JSON.parse(el).quantity)}.00</p>
                                        </div>
                                        <div className='cart_cost_per'>
                                            <p>($ {JSON.parse(el).object.price}.00 each)</p>
                                        </div>
                                        <div className='cartUpdateSec'>
                                            <label className='cartQty'>Qty
                                                <input type='number' min='0' 
                                                    defaultValue={JSON.parse(el).quantity} 
                                                    onChange={this.handleInput('quantity')}
                                                    className='cart_quantity'
                                                />
                                            </label>
                                            {/* <input type='submit' value='Update Cart' 
                                                onClick={() => { 
                                                    localStorage.setItem(JSON.parse(el).object.id, 
                                                        JSON.stringify({ 
                                                            'quantity': this.state.quantity, 
                                                            'object': JSON.parse(el).object 
                                                    
                                                        })
                                                    )
                                                }
                                            }/> */}
                                        </div>   
                                        <div className='update_contain'>
                                            <input type='submit' value='Update Cart'
                                                onClick={() => {
                                                    this.cartUpdate(JSON.parse(el).object)
                                                }
                                            } />
                                        </div>
                                        <div className='removeContainer'>
                                            <input type='submit' value='Remove Item' className='removeBtn'
                                                onClick={() => {
                                                    this.deleteStorageItem(JSON.parse(el).object.id)
                                                }
                                            } />
                                        </div>
                                    </div> 

                                </li>
                            </div> 
                        ))}
                    </ul>

                    {/* <input type='submit' onClick={() => this.calcTotal()} value='Recalculate Total'/>  */}
                    
                </div> 

                <div className='spacer_cart'></div>

                <div className='cartright_contain'>

                    <h2 className='checkout_title'>Cart Summary</h2>

                    <div className='cartSummary-total'>
                        <div className='grandTotal'>Subtotal</div>
                        <div>$ {this.state.subtotal}.00</div>
                    </div> 
                    <div className='cartSummary-ship'>
                        <div className='grandTotal'>Standard Shipping</div>
                        <div>${this.state.subtotal > 0 ? 5.79 : 0.00}</div>
                    </div>
                    <div className='cartSummary-grand'>
                        <div>Order Total</div>
                        <div className='grandTotal'>$ {this.state.subtotal > 0 ? this.state.subtotal + 5.79 : 0.00}</div>
                    </div> 
                    <div className='cartSummary-checkout'>
                        <div className='tax'>Tax applied at checkout</div>
                    </div>  

                    <input type='submit' value='Proceed to checkout' className='checkoutButton'/>
                </div> 
            </div> 
        )
    }

}

export default Cart;