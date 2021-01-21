import React from 'react';
import { Link } from 'react-router-dom'
import {getDetails } from './redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import ProductDetail from './ProductDetail'

const ProductCard = ({imagen, title, price, condition, stock, id}) =>{

 return(
    <div>
         <div class="productcard">
        <Link to={`/products/details/${id}`}>
            <img class="productimg" src={imagen}></img>
        </Link>

        <div class="productdetails">
            
        <Link to={`/products/details/${id}`}>
            <h3>{title}</h3>
        </Link>
        
        <h4>$ {price}</h4>
        <p>Estado: {condition}</p>
        <p>Stock disponible {stock}</p>
        <p>Id del producto: {id}</p>
    </div>
</div>
    </div>
 )
}
  
  export default ProductCard;