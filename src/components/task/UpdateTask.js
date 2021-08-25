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
        item: ''

      }
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showTask(match.params.id, user)
      .then((res) => this.setState({ list: res.data.task }))
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
// because `this.state.task` is an object with multiple keys, we have to do some fancy updating
  const userInput = { [event.target.item]: event.target.value }
  this.setState((currState) => {
    // "Spread" out current movie state key/value pairs, then add the new one at the end
    // this will override the old key/value pair in the state but leave the others untouched
    return { task: { ...currState.task, ...userInput } }
  })
}

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, history, match } = this.props

  updateTask(this.state.task, match.params.id, user)
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
          <Form.Label>Task Name:</Form.Label>
          <Form.Control
            required
            name='item'
            value={task.item}
            placeholder='new task name'
            onChange={this.handleChange}
          />{task.item}
        </Form.Group>
        <Button type='submit'>Update Bucket List</Button>
      </Form>
    </div>
  )
}
}

export default withRouter(UpdateTask)
