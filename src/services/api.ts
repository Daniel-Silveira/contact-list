import axios from 'axios'

const http = axios.create({
  baseURL: 'https://contact-api-test.herokuapp.com',
  timeout: 1000 * 30, // 30 seconds,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default http
