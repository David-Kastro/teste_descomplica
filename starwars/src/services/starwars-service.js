import api from './api-service'

export const people = () => {
  return api.get('/people')
}