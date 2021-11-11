import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_FAILURE,
  FETCH_TODO_SUCCESS,
  SEARCH_ACTION,
  SINGLE_NFT_REQUEST,
  SINGLE_NFT_SUCCESS,
} from "./actionTypes";

export const fetchTodoRequest = (payload:any) => ({
  type: FETCH_TODO_REQUEST,
  payload
});

export const fetchTodoSuccess = (
  payload: any
) => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});

export const fetchTodoFailure = (
  payload: any
) => ({
  type: FETCH_TODO_FAILURE,
  payload,
});

export const searchAction = (
  term: any
) => ({
  type: SEARCH_ACTION,
  term
});

export const singleNftRequest = (mint:any) => ({
  type: SINGLE_NFT_REQUEST,
  mint
});

export const singleNftSuccess = (
  payload: any
) => ({
  type: SINGLE_NFT_SUCCESS,
  payload,
});