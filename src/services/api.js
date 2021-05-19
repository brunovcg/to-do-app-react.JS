import axios from 'axios'

const api = axios.create({
    baseURL: 'http://api-nodejs-todolist.herokuapp.com/'
});

export default api