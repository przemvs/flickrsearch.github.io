import {API, API_KEY} from '../../constants/flickr.api'
import axios from 'axios/index'

class FlickrService {
  fetchData = async data => {
    return axios.get(`${API}?method=flickr.photos.search&api_key=${API_KEY}&text=${data}&format=json&nojsoncallback=1`)
  }

  fetchOwner = async (id, secret) => {
    return axios.get(`${API}?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${id}&secret=${secret}&format=json&nojsoncallback=1`)
  }
}

export default new FlickrService()
