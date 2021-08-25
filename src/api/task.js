import apiUrl from '../apiConfig'
import axios from 'axios'

// create list request
export const createTask = (id, data, user) => {
  return axios({
    url: apiUrl + '/tasks/' + id,
    method: 'post',
    data: { task: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// delete a task
export const deleteTask = (id, user, taskId) => {
  return axios({
    url: apiUrl + '/tasks/' + id + '/' + taskId,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// edit/update task
export const updateTask = (taskData, id, user, taskId) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/tasks/' + id + '/' + taskId,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { task: taskData }
  })
}
// show one task
export const showTask = (id, user, taskId) => {
  return axios({
    url: apiUrl + '/tasks/' + id + '/' + taskId,
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
