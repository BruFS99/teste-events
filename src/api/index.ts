import axios, { AxiosRequestConfig } from 'axios'
import generateKeyApi from 'utils/generateKeyApi'

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
})

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const { nowTimeStamp: ts, publicKey: apikey, hash } = generateKeyApi()

    config.params = { ...config.params, ...{ ts, apikey, hash } }
    return config
  },

  (error) => {
    Promise.reject(error)
  }
)

export default api
