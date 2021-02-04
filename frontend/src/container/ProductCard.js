import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './css/productCard.scss'

const ProductCard = ({imagen, title, price, condition, stock, id}) =>{

 return(
    <div classname='main'>
        <div class="productcard">
            <Link to={`/products/details/${id}`}>
                <img class="productimg" src={imagen} alt='no se cargo la imagen'></img>
            </Link>
            <table class="productdetails">
                <NavLink 
                to={`/products/details/${id}`} >
                    <h3 class='productTitle'>{title}</h3>
                </NavLink>
                <tr classname='productPrice'>$ {price}</tr>
                <tr classname='productPrice'>Estado: {condition}</tr>
                <tr classname='productPrice'>Stock disponible {stock}</tr>
                <tr classname='productPrice'>Id del producto: {id}</tr>
            </table>
        </div>
    </div>
 )
}
  
  export default ProductCard;