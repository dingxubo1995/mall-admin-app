import axios from '../axios'
export default {
    productsAll(params) {
        return axios.get('/products/all', { params })
    }
}