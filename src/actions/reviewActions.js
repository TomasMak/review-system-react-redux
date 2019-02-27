import axios from 'axios'

export const GET_REVIEWS = 'GET_REVIEWS'
export const GET_REVIEWS_PAGE_FORWARD = 'GET_REVIEWS_PAGE_FORWARD'
export const GET_REVIEWS_PAGE_BACK = 'GET_REVIEWS_PAGE_BACK'
export const ADD_REVIEW = 'ADD_REVIEW'
export const DELETE_REVIEW = 'DELETE_REVIEW'
export const ITEMS_LOADING = 'ITEMS_LOADING'

// Use "proxy": "http://localhost:3001", if needed change it in package.json

export const getReviews = (search) => (dispatch) => {
    dispatch(setItemsLoading())
    axios
        .get('/reviews?_start=0&_end=5' + search)
        .then(res =>
            dispatch({
                type: GET_REVIEWS,
                payload: res.data
            }))
}
export const pageForward = (begin, end) => (dispatch) => {
    axios.get(`reviews?_start=${begin}&_end=${end}`).then((res) => {
        dispatch({
            type: GET_REVIEWS_PAGE_FORWARD,
            payload: res.data
        });
    });
}

export const pageBack = (begin, end) => (dispatch) => {
    axios.get(`reviews?_start=${begin}&_end=${end}`).then((res) => {
        dispatch({
            type: GET_REVIEWS_PAGE_BACK,
            payload: res.data
        });
    });
}

export const addReview = review => dispatch => {
    axios
        .post('/reviews', review).then(res =>
            dispatch({
                type: ADD_REVIEW,
                payload: res.data
            }))
}

export const deleteReview = (id) => dispatch => {
    axios
        .delete(`/reviews/${id}`).then(res => {
            dispatch({
                type: DELETE_REVIEW,
                payload: id
            })
        })
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}