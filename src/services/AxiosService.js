import axios from 'axios'

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=vRfVTqprAhtz5hkiTLinoIeW3KNdeNnzE0xoqPjZ',
  timeout: 8888
})
