/* eslint-disable node/handle-callback-err */
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { deleteTask, updateTask } from '../../api/task'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class ShowTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      task: {}
      // done: false
    }
  }

  componentDidMount () {
    const { task } = this.props
    this.setState({ task: task })
    console.log(this.state)
  }

  complete = () => {
    const { user, msgAlert, history, match } = this.props

    const copiedTask = Object.assign(this.state.task)
    copiedTask.done = !copiedTask.done
    this.setState({ task: copiedTask })

    updateTask(this.state.task, match.params.id, user, this.state.task._id)
      .then(() => history.push('/'))
      .then(() => history.push(match.url))
      .then(() =>
        msgAlert({
          heading: 'Task has been Updated!',
          message: 'Nice work, go check out your list.',
          variant: 'success'
        })
      )
      .catch((err) => {
        msgAlert({
          heading: 'List update failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  deleteTask = (taskId) => {
    const { match, user, msgAlert, history } = this.props
    deleteTask(match.params.id, user, taskId)
      // Redirect to the index of lists
      .then(() => history.push('/'))
      .then(() => history.push(match.url))
      .then(() =>
        msgAlert({
          heading: 'Successfully Deleted Task',
          message: 'Your task no longer exists',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Failed to Delete Task',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

  render () {
    if (this.state.task === null) {
      return 'Loading...'
    }

    const { match, task } = this.props
    return (
      <>
        <Card key={task._id} style={{
          width: '18rem',
          height: '14rem'
        }}>
          <Card.Header>Your Task:</Card.Header>
          <Card.Body>
            <Card.Title>Get This Done:</Card.Title>
            <Card.Text style={{ overflow: 'auto' }}> {task.item} </Card.Text>
            <div style={{
              position: 'relative',
              bottom: '5px'
            }}>
              <Link to={{ pathname: `/lists/${match.params.id}/edit-task`, taskId: task._id }}>
                <Button variant="secondary">Edit</Button>
              </Link>
              <Button onClick={() => this.deleteTask(task._id)} variant="danger">Delete</Button>
              <Button variant="secondary" onClick={this.complete} >{task.done ? 'TRUE' : 'FALSE'}</Button>
            </div>
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default withRouter(ShowTask)
