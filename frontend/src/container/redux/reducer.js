
import { bindActionCreators } from 'redux'
import {
    GET_PRODUCTS,
    GET_DETAILS
} from './constants'


const initialState = {
    currentproduct: "",
    products: [],
    currentoffset: "0",
    currentsort: '',
    condition: '',
    details:[],
    pictures:[],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                currentproduct: action.payload.query,
                products: action.payload.results,
                currentoffset: action.payload.paging.offset,
                currentsort: action.payload.sort.id
            }
        }
        case GET_DETAILS: {
            return {
                ...state,
                details: action.payload,
                photos: action.payload.photos
            }
        }

        default:
            return state
    }
}
export default rootReducer