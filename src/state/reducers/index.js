import {combineReducers} from 'redux'
import flickrReducer from './flickr.reducer'

export default combineReducers({
  data: flickrReducer
})
