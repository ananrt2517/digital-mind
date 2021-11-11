import {
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  SINGLE_NFT_SUCCESS,
  SET_SCROLL_POSITION,
} from '../actions/actionTypes';

export interface IFiles { 
  uri: string,
}
export interface IProperties { 
  files: IFiles[],
}

export interface IData { 
  Description: string,
  Mint: string,
  Properties: IProperties,
  Title: string,
  id: string,
}
export interface IState {
  data: IData[],
  nft: any[],
  scrollPosition: number,
}

const initialState: IState = {
  data: [],
  nft: [],
  scrollPosition: 0,
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
    case SET_SCROLL_POSITION:
      return {
        ...state,
        scrollPosition: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};