import apiUrl from '../apiConfig'
import axios from 'axios'

// create list request
export const createList = (data, user) => {
  return axios({
    url: apiUrl + '/lists',
    method: 'post',
    data: { list: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// index of all lists
export const indexList = (user) => {
  return axios({
    url: apiUrl + '/lists',
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// show one list
export const showList = (id, user) => {
  return axios({
    url: apiUrl + '/lists/' + id,
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteList = (id, user) => {
  return axios({
    url: apiUrl + '/movies/' + id,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
