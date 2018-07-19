import {
  FETCH_FLICKR_START,
  FETCH_FLICKR_FAILURE,
  FETCH_FLICKR_SUCCESS,
  FETCH_OWNER_INFO_START,
  FETCH_OWNER_INFO_FAILURE,
  FETCH_OWNER_INFO_SUCCESS
} from 'constants/types'

const initialState = {
  flickr: {
    isLoading: false,
    isEmpty: true,
    data: {}
  },
  owner: {
    isLoading: false,
    isEmpty: true,
    details: {}
  }
}

const flickrReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLICKR_START:
      return {
        ...state,
        flickr: {
          isLoading: true
        }
      }

    case FETCH_FLICKR_SUCCESS:
      return {
        ...state,
        flickr: {
          isLoading: false,
          isEmpty: false,
          data: action.payload
        }
      }

    case FETCH_FLICKR_FAILURE:
      return {
        ...state,
        flickr: {
          isLoading: false,
          isEmpty: false,
          data: {}
        }
      }

    case FETCH_OWNER_INFO_START:
      return {
        ...state,
        owner: {
          isLoading: true
        }
      }

    case FETCH_OWNER_INFO_SUCCESS:
      return {
        ...state,
        owner: {
          isLoading: false,
          isEmpty: false,
          details: action.payload
        }
      }

    case FETCH_OWNER_INFO_FAILURE:
      return {
        ...state,
        owner: {
          isLoading: false,
          isEmpty: false,
          details: {}
        }
      }

    default:
      return state
  }
}

export default flickrReducer
