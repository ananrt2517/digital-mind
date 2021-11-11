import {
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  SINGLE_NFT_SUCCESS,
} from '../actions/actionTypes';

interface IState {
  data: any[],
  nft: any[],
}

const initialState: IState = {
  data: [],
  nft: [],
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
      };
    case SINGLE_NFT_SUCCESS:
      return {
        ...state,
        nft: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};