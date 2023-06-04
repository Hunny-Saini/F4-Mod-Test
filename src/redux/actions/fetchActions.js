import * as types from './actionTypes';
import axios from 'axios';

export const fetchPostsRequest = () =>({
    type : types.FETCH_POSTS_REQUEST
})

export const fetchPostsSuccess = (posts) =>({
    type : types.FETCH_POSTS_SUCCESS,
    payload : posts
})

export const fetchPostsFailed = (error) =>({
    type : types.FETCH_POSTS_FAILED,
    payload : error
})

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => dispatch(fetchPostsSuccess(res.data)))
        .catch(error => dispatch(fetchPostsFailed(error)))
    }
}