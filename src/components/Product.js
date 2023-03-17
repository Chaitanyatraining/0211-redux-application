import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addToCart } from '../redux/product-actions/ProductActions';
import { useDispatch } from "react-redux" 

function Product() {
    const [product,setProduct] = useState({});
    const [isProductAdded, setIsProductAdded] = useState(false);
    const {id} = useParams();
    const dispatch = useDispatch();

    const getProductData = async ()=>{
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(data)
        setProduct(data);
    }

    useEffect(()=>{
        getProductData();
    },[])

    //array.length
    // for object how can we check the data is available are not
    // Object.keys()
  return (
    <div>
        <h2 className='py-3'>Product page</h2>
        {
            Object.keys(product).length ? (
                <div className='container'>
                    <div className='row border border-primary'>
                        <div className='col-md-6'>
                            <img src={product.image} className="img-fluid" />
                        </div>
                        <div className='col-md-6'>
                            <h3 className='mt-3'>{product.title}</h3>
                            <h5 className='bg-secondary my-3'>{product.category}</h5>
                            <div className='product_price'>
                                <span className='bg-info text-light p-1'>Price : ${product.price}</span>
                            </div>
                            <div className='product__desc mt-2'>
                                <p className='p-2'>{product.description}</p>
                            </div>
                            <div className='product_add_to_cart'>
                                <button className='btn btn-info' 
                                onClick={()=>{
                                    dispatch(addToCart(product))
                                    setIsProductAdded(true);
                                }}
                                >{isProductAdded ? "Added" : "Add to Cart" }</button>
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <div>
                    <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952xb5sn40k1p8tj7o0q6xtszdgavkzb2d4mf28u2kd&rid=200w.gif&ct=g"
                    alt="loading-img" />
                </div>
            )
        }
    </div>
  )
}

export default Product