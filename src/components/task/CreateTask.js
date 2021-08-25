import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createTask } from '../../api/task'

class CreateTask extends Component {
  constructor (props) {
    super(props)

    this.state = {
      task: {
        item: '',
        done: false
      }
    }
  }

  handleChange = (event) => {
    const copiedTask = Object.assign(this.state.task)
    copiedTask[event.target.name] = event.target.value
    this.setState({ task: copiedTask })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, history, match } = this.props
    console.log(this.state.task)
    createTask(match.params.id, this.state.task, user)
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId='item'>
            <Form.Label>Task name</Form.Label>
            <Form.Control
              required
              name='item'
              value={this.state.task.item}
              placeholder='Task Name'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </>
    )
  }
}

export default withRouter(CreateTask)
