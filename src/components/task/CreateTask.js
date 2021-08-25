import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import TaskForm from '../shared/TaskForm'

import { createTask } from '../../api/task'

class CreateTask extends Component {
  constructor (props) {
    super(props)

    this.state = {
      task: {
        item: ''
      }
    }
  }

  handleChange = (event) => {
    // The event.target of this event will be an input element
    // Which will have a `name` attribute (key in the state) & a `value` (what the user typed)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, history } = this.props

    createTask(this.state, user)
      .then(res => history.push('/lists/' + res.data.list._id))
      .then(() => msgAlert({ heading: 'Task Created!', message: 'Nice work, go check out your task.', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Task creation failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <>
        <h3>Create Task</h3>
        <TaskForm
          task={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    )
  }
}

export default withRouter(CreateTask)
