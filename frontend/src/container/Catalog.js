import React, {useEffect} from 'react'
import { getProducts } from './redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './ProductCard'

function Catalog() {
    const dispatch = useDispatch()
    const Product = useSelector(state => state.currentproduct)
    const Products = useSelector(state => state.products)
    const Page = useSelector(state => state.currentoffset)
    const Sort = useSelector(state => state.currentsort)

    useEffect(() => {
        dispatch(getProducts(Product, Page, Sort))
    }, [getProducts])

    return (
        <div >
        <div class="cajaproductos">
            <div>
            {!Products.length ? <div class="cataloguesearch"><h1>Realice su busqueda</h1></div> : 
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