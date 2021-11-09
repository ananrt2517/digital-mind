import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        todos: [],
      };
    default:
      return {
        ...state,
      };
  }
};