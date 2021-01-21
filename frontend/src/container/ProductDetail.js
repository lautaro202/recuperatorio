import React from 'react'
import './css/productdetail.scss'

 function ProductDetail({image,title, price, condition, stock}) {
    return (
        <div className='ProductID'>
            <div className='box'>
                <div className='idBox'>
                    <h3>{title}</h3>
                    <img src={image}/>
                </div>
            <div className='info'>
                <h5>Condition: </h5>
                <p>{condition}</p>
                <div className='details'>
                    <h5>Price: $ {price}</h5> 
                    <p>Stock: {stock}</p>
                </div>
            </div>
        </div>
    </div>
    )
}


export default ProductDetail