import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart} from '../../redux/product-actions/ProductActions'

function Cart() {
    const [total,setTotal] = useState(0);
    const dispatch = useDispatch()
    
    //we have a hook to access the redux store state

    //we need to show the products if available else show the text
    //total price of all the products in the cart
    const cart_data = useSelector((state)=> state.productsData.cartData);
    console.log(cart_data);

    //map, filter, reduce
    const totalPrice = cart_data.reduce((prevsValue, currentValue)=>{
        return  prevsValue + currentValue.price;
    },0)

  return (
    <div>
        {cart_data && cart_data.length>0 && (
            <div className='mt-3'> 
                  <h4>Total Price : {totalPrice}</h4>
            </div>
        ) }
    <div className='my-4'>
        <div className='container mt-2 border border-dark'>
        {
            cart_data && cart_data.length ? (
                cart_data.map((product)=>(
                <div key={product.id} className='row mt-3'>
                    <div className='col-md-4'>
                        <img src={product.image} alt={product.title} className="img-fluid" style={{maxHeight:"300px"}} />
                    </div>
                    <div className='col-md-6'>
                        <div className='mt-2 p-1'>
                            <h2>Title : {product.title}</h2>
                        </div>
                        <div>
                            <span>{product.category}</span>
                        </div>
                        <div>
                            <span>{product.description}</span>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='mt-2'>
                            <div className='pt-2'>Price: ${product.price}</div>
                            <div>
                                <button className='btn btn-danger mt-2 px-2py-2'
                                onClick={()=>{
                                    dispatch(removeFromCart(product.id))
                                }}
                                >Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                )) 
            ):(<p>Please add some products to the cart</p>)
        }
        </div>
    </div>
    </div>
  )
}

export default Cart