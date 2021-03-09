import { AppState } from '../AppState'
import { nasaApi } from './AxiosService'

class PictureService {
  async searchPicture(query) {
    const res = await nasaApi.get('apod?api_key=vRfVTqprAhtz5hkiTLinoIeW3KNdeNnzE0xoqPjZ&date=' + query)
    AppState.picture = res.data
  }
}

export const pictureService = new PictureService()
