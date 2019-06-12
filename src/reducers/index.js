import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../actions/actionTypes'

const initialState = {
  fetching: false,
  message: null,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { fetching: true, message: null, error: null };
    case API_CALL_SUCCESS:
      return { fetching: false, message: action.message, error: null };
    case API_CALL_FAILURE:
      return { fetching: false, message: null, error: action: error };
    default:
      return state;
  }
}

export default reducer;