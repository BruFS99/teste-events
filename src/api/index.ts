import axios, { AxiosRequestConfig } from 'axios'
import generateKeyApi from 'utils/generateKeyApi'

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
})

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const { nowTimeStamp, publicKey, hash } = generateKeyApi()

    if (config.url && !config.url.startsWith('?')) {
      config.url = config.url.concat('?')
    }

    const queryParams = `&ts=${nowTimeStamp}&apikey=${publicKey}&hash=${hash}`

    config.url += queryParams
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default api
