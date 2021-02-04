import React from 'react'
import './css/detailsxid.scss'

 function ProductDetail({image,title, price, condition, stock}) {
    return (
        <div>
            <img 
            className='productimage'
            src={image}
            alt='no se cargó la imagen salu2'   
            />
            <div>
                <h3>{title}</h3>
                <h4>$ {price}</h4>
                <p>{condition}</p>
                <p>Stock: {stock}</p>
            </div>
        </div>
    )
}


export default ProductDetail