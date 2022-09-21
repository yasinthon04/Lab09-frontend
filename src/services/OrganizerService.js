import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getOrganizers(perPage, page) {
    return apiClient.get('/organizers?_limit=' + perPage + '&_page=' + page)
  },
  saveOrganizer(organizers) {
    return apiClient.post('/organizers', organizers)
  }
}
