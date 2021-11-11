import { IData } from '../../pages/Explore/Explore';
import { INFT } from '../../pages/NFT/Nft';
import {
  FETCH_NFTS_SUCCESS,
  SINGLE_NFT_SUCCESS,
  SET_SCROLL_POSITION,
} from '../actions/actionTypes';
export interface IState {
  data: IData[],
  nft: INFT,
  scrollPosition: number,
}

const initialState: IState = {
  data: [],
  nft: {
    Properties: {
      attributes: [],
      files: [],
    },
    Title: "",
    Description: ""
  },
  scrollPosition: 0,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_NFTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
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