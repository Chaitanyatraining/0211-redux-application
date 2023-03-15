import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {
        const [products,setProducts] = useState([]);    

    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }

    useEffect(()=>{
        getProducts();
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
                        ):<p>Loading...</p>
                }
            </div>
        </div>
    </div>
  )
}

export default Products