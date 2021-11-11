import { IData } from '../../pages/Explore/Explore';
import { INFT } from '../../pages/NFT/Nft';
import {
  FETCH_NFTS_REQUEST,
  FETCH_NFTS_SUCCESS,
  SEARCH_ACTION,
  SINGLE_NFT_REQUEST,
  SINGLE_NFT_SUCCESS,
  SET_SCROLL_POSITION,
} from './actionTypes';

export const fetchNftsRequest = (payload:number) => ({
  type: FETCH_NFTS_REQUEST,
  payload
});

export const fetchNftsSuccess = (
  payload: IData[]
) => ({
  type: FETCH_NFTS_SUCCESS,
  payload,
});

export const searchAction = (
  term: string
) => ({
  type: SEARCH_ACTION,
  term
});

export const singleNftRequest = (mint:string) => ({
  type: SINGLE_NFT_REQUEST,
  mint
});

export const singleNftSuccess = (
  payload: INFT
) => ({
  type: SINGLE_NFT_SUCCESS,
  payload,
});

export const setScrollPosition = (
  payload: any
) => ({
  type: SET_SCROLL_POSITION,
  payload,
});