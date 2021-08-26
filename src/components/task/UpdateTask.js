import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// API request
import { updateTask, showTask } from '../../api/task'

class UpdateTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      task: {
        item: '',
        done: false
      }
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert, location } = this.props

    showTask(match.params.id, user, location.taskId)
      .then((res) => this.setState({ task: res.data.task }))
      .then(() =>
        msgAlert({
          heading: 'Show Task success',
          message: 'Check out the list',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Show Task failed, try again!',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

handleChange = (event) => {
  const copiedTask = Object.assign(this.state.task)
  copiedTask[event.target.name] = event.target.value
  this.setState({ task: copiedTask })
}

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, history, match, location } = this.props

  updateTask(this.state.task, match.params.id, user, location.taskId)
    .then((res) => history.push('/lists/' + match.params.id))
    .then(() =>
      msgAlert({
        heading: 'Task Updated!',
        message: 'Nice work, go check out your updated task.',
        variant: 'success'
      })
    )
    .catch((err) => {
      msgAlert({
        heading: 'Task update failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      })
    })
}

render () {
  const { task } = this.state
  return (
    <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>New Task Name:</Form.Label>
          <Form.Control
            required
            name='item'
            value={task.item}
            placeholder='new task name'
            onChange={this.handleChange}
          />{task.item}
        </Form.Group>
        <Button type='submit'>Update Your Task</Button>
      </Form>
    </div>
  )
}
}

export default withRouter(UpdateTask)
