import axios from 'axios'

export const FETCH_DOGS_START = 'FETCH_DOGS_START'
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS'
export const FETCH_DOGS_FAILURE = 'FETCH_DOGS_FAILURE'

export const fetchDogs = () => {
  return dispatch => {
    dispatch({type:FETCH_DOGS_START})
    axios
    .get('https://dog.ceo/api/breed/shiba/images/random/1')
    .then(res => {
      dispatch({type:FETCH_DOGS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_DOGS_FAILURE, payload: err.message})
    })
  }
}