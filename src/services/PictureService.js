import { AppState } from '../AppState'
import { nasaApi } from './AxiosService'

class PictureService {
  async searchPicture(query) {
    const res = await nasaApi.get(query)
    AppState.picture = res.data.results
  }
}

export const pictureService = new PictureService()
