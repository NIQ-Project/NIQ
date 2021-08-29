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
          heading: 'Task Updated Successfully',
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
          heading: 'Task Deleted Successfully',
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
        <Card key={task._id} className='card-grad m-2 ' style={{
          width: '18rem',
          height: '20rem',
          color: 'white'
        }}>
          <Card.Header className='dark-bg text white'>Your Task:</Card.Header>
          <Card.Body className='dark-bg'>
            <Card.Title className='text-warning' style={{ overflow: 'auto' }}>{task.item}</Card.Title>
            <div className='align-items-end' style={{
              position: 'relative',
              top: '7rem'
              // marginTop: '10px'
            }}>
              <Link to={{ pathname: `/lists/${match.params.id}/edit-task`, taskId: task._id }}>
                <Button variant="dark" style={{ width: '50%' }}>Edit</Button>
              </Link>
              <Button onClick={() => this.deleteTask(task._id)} variant="dark" style={{ width: '50%' }}>Delete</Button>

              <Button variant="warning" onClick={this.complete} style={{ width: '100%', marginTop: '1rem' }}>{task.done ? 'Completed' : 'Uncompleted'}</Button>
            </div>
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default withRouter(ShowTask)
