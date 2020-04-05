import axios from 'axios'
import config from '../../config'

const http = axios.create({
    baseURL: config.currencyProviderUrl,
    timeout: 30000
})

console.log('url', config.currencyProviderUrl)

http.defaults.headers.common['Accept'] = 'application/json'
http.defaults.headers.common['Content-Type'] = 'application/json'
http.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

export default http