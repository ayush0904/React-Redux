
import axios from 'axios'
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from './userTypes'


export const fetchUserRequest = () => {
return {
type : FETCH_USER_REQUEST
}
}


export const fetchUserSuccess = users => {
return {
    type : FETCH_USER_SUCCESS,
    payload : users
    }
}


export const fetchUserFailure = error => {
    return {
        type : FETCH_USER_FAILURE,
        payload : error
    }
}

export const fetchUsers = () => {
    return  (dispatch) => {
      dispatch(fetchUserRequest())
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          const users = response.data.map(user => user.id)
          dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUserFailure(error.message))
        })
    }
  }