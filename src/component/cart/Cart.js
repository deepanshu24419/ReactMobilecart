import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from '../cart/CartColumns';
import CartList from '../cart/CartList';
import CartTotals from '../cart/CartTotals';
import EmptyCart from '../cart/EmptyCart';
import {ProductConsumer} from '../../context';



export default class Cart extends Component {
    render() {

        return (
          <section>
              <ProductConsumer>
                 {value =>{
                     const {cart} = value;
                     if(cart.length >0){
            return (   
                <>          
<Title name="your" title="cart" />
              <CartColumns />
              <CartList  value={value} />
              <CartTotals value={value} />
</>
            )
                     }
                     else {
                         return (
                            <EmptyCart  />
                         )
                     }
                 }
                
                    
                 } 
              </ProductConsumer>
          </section>
        )
    }
}
