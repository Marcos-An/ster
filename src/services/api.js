import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ster-chat.herokuapp.com'
})

export default api
