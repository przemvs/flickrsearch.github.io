import {
  FETCH_FLICKR_FAILURE,
  FETCH_FLICKR_START,
  FETCH_FLICKR_SUCCESS,
  FETCH_OWNER_INFO_FAILURE,
  FETCH_OWNER_INFO_START,
  FETCH_OWNER_INFO_SUCCESS
} from 'constants/types'

import flickrService from 'services/flickr'

export const getImages = data => async dispatch => {
  dispatch({ type: FETCH_FLICKR_START })
  try {
    const res = await flickrService.fetchData(data)
    dispatch({ type: FETCH_FLICKR_SUCCESS, payload: res.data })
  } catch (error) {
    dispatch({ type: FETCH_FLICKR_FAILURE })
  }
}

export const getOwnerInfo = (id, secret) => async dispatch => {
  dispatch({ type: FETCH_OWNER_INFO_START })
  try {
    const res = await flickrService.fetchOwner(id, secret)
    dispatch({ type: FETCH_OWNER_INFO_SUCCESS, payload: res.data })
  } catch (error) {
    dispatch({ type: FETCH_OWNER_INFO_FAILURE })
  }
}
