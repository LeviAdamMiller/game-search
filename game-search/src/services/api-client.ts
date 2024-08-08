import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4d1f457a39a14c49be2a643e721494f7'
    }
})