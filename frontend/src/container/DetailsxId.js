import React, { useEffect } from 'react';
import { getDetails } from './redux/actions.js'
import { useSelector, useDispatch } from "react-redux"
import ProductDetail from './ProductDetail'
import './css/productdetail.scss'

const Details = ({match}) => {

    const dispatch = useDispatch()
    const Details = useSelector(state => state.details)
    const Picture = useSelector(state => state.pictures)

    useEffect(() => {
        dispatch(getDetails(match.params.id));
    }, [getDetails])
    return (
        <div class="catalogue">
               {
                <ProductDetail  
                
                    image={Picture}
                    title={Details.title}
                    price={Details.price}
                    condition={Details.condition}
                    stock={Details.available_quantity}
                    id={Details.id}
                    warranty={Details.warranty}
                />}
                {console.log(Picture)}
        </div>
    )
}

export default Details;