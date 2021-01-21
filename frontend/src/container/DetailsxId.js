import React, { useEffect } from 'react';
import { getDetails } from './redux/actions.js'
import { useSelector, useDispatch } from "react-redux"
import ProductDetail from './ProductDetail'

const Details = ({match}) => {

    const dispatch = useDispatch()
    const Details = useSelector(state => state.details)

    useEffect(() => {
        dispatch(getDetails(match.params.id));
    }, [getDetails])
    return (
        <div class="catalogue">
               {
                <ProductDetail  
                    image={Details.secure_thumbnail}
                    title={Details.title}
                    price={Details.price}
                    condition={Details.condition}
                    stock={Details.available_quantity}
                    id={Details.id}
                    warranty={Details.warranty}
                />}
        </div>
    )
}

export default Details;