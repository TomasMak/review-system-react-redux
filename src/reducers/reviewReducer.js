import { GET_REVIEWS, ADD_REVIEW, DELETE_REVIEW, ITEMS_LOADING, GET_REVIEWS_PAGE_FORWARD, GET_REVIEWS_PAGE_BACK } from '../actions/reviewActions'

const initialState = {
    reviews: [],
    currentPage: 0,
    resultsPerPage: 5
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
                loading: false
            }
        case GET_REVIEWS_PAGE_FORWARD:
            return {
                ...state,
                reviews: action.payload,
                currentPage: state.currentPage + 1,
                loading: false
            }
        case GET_REVIEWS_PAGE_BACK:
            return {
                ...state,
                reviews: action.payload,
                currentPage: state.currentPage - 1,
                loading: false
            }
        case DELETE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.payload)
            }
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [action.payload, ...state.reviews]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}