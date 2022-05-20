import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3002',
  timeout: 1000 * 30, // 30 seconds,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default http
