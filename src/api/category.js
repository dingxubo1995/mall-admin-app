import axios from '../axios'
export default {
    list(params) {
        console.log(params);
        return axios.get('/category/all', { params })
    }
}