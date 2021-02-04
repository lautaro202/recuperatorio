import React, {useEffect} from 'react'
import { getCondition, getProducts } from './redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './ProductCard'
import './css/catalog.scss'

function Catalog() {
    const dispatch = useDispatch()
    const Product = useSelector(state => state.currentproduct)
    const Products = useSelector(state => state.products)
    const Page = useSelector(state => state.currentoffset)
    const Sort = useSelector(state => state.currentsort)
    const Condition = useSelector(state => state.condition)
    let sort_asc = 'price_asc'
    let sort_desc = 'price_desc'
    let nuevo = '2230284'
    let usado = '2230581'

    useEffect(() => {
        dispatch(getProducts(Product, Page, Sort))
        dispatch(getCondition(Condition))
    }, [getProducts, getCondition])

    return (
        <div className='main'>
            <div class="pagination">
                    <label><span class="previous" onClick={() => { dispatch(getProducts(Product, Page - 10, Sort)) }} >Previous 
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
 </span></label>
                    <span class="previous" onClick={() => { dispatch(getProducts(Product, Page + 10, Sort)) }}>Next</span>

            </div>
        <div class="cajaproductos">
            <div className='container'>
                <div classname='sort' style={{fontSize:'20px', cursor:'pointer', justifyContent:'space-between', display:'flex', paddingTop:'20px', paddingBottom:'20px'}}>
                    <span class="asc_price" onClick={() => { dispatch(getProducts(Product, Page, sort_asc)) }}>Menor Precio</span>
                    <span class="asc_price" onClick={() => { dispatch(getProducts(Product, Page, sort_desc)) }}>Mayor Precio</span>
                    <span class="asc_price" onClick={() => { dispatch(getCondition(Product, Page, Sort, usado)) }}>Usado </span>
                    <span class="asc_price" onClick={() => { dispatch(getCondition(Product, Page, Sort,nuevo )) }}>Nuevo </span>
                </div>


            {
                Products.map(product =>
                    <ProductCard
                    key={product.id}
                    imagen={product.thumbnail}
                    title={product.title}
                    price={product.price}
                    condition={product.condition}
                    stock={product.available_quantity}
                    id={product.id}
                />)}
            </div>
            
        </div>
        
    </div>

    )
}
export default Catalog