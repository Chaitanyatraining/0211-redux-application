import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/product-actions/ProductActions';

function Products() {
        const dispatch = useDispatch();
        const products = useSelector((state)=>state.productsData.products);
        console.log(products);

       useEffect(()=>{
        dispatch(fetchProducts());
    }, [])
 
  return (
    <div>
        <h2>Products</h2>
        <div className='container'>
            <div className='row'>
                {
                    products.length > 0 ?(
                        products.map((product)=>(
                            <div className='col-md-3'>
                                <Link to={`/product/${product.id}`}> 
                                <div className='card' key={product.id}>
                                    <img className='img-fluid' src={product.image} alt={product.title} />
                                <div className='card-body'>
                                    <h3 className='card-title'>{product.title}</h3>
                                </div>
                                </div>
                                </Link>
                            </div>
                        ))
                        ):(
                        <div>
                            <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952xb5sn40k1p8tj7o0q6xtszdgavkzb2d4mf28u2kd&rid=200w.gif&ct=g"
                            alt="loading-img" />
                        </div>
                        )
                }
            </div>
        </div>
    </div>
  )
}

export default Products