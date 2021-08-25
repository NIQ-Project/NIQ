/* eslint-disable node/handle-callback-err */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showList, deleteList } from '../../api/list'
import { deleteTask } from '../../api/task'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import Card from 'react-bootstrap/Card'

class ShowList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: null,
      deleted: false
    }
  }

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showList(match.params.id, user)
      .then((res) => this.setState({ list: res.data.list }))
      .then(() => msgAlert({
        heading: 'Show bucket list was a success',
        message: 'Check out your list',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Show list failed',
        message: 'Something went wrong',
        variant: 'danger'
      }))
  }

  destroy = () => {
    const { match, user, msgAlert, history } = this.props
    deleteList(match.params.id, user)
    // Redirect to the list of movies
      .then(() => history.push('/lists'))
      .then(() =>
        msgAlert({
          heading: 'Successfully Deleted',
          message: 'Your list no longer exists',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Failed to Delete List',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

  deleteTask = (taskId) => {
    const { match, user, msgAlert, history } = this.props
    deleteTask(match.params.id, user, taskId)
    // Redirect to the index of lists
      .then(() => history.push('/lists'))
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
    if (this.state.list === null) {
      return 'Loading...'
    }
    const { owner } = this.state.list
    const { user, history, match } = this.props
    const { list } = this.state
    const showTasks = list.tasks.map(task => (
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
            <Button variant="secondary">Edit</Button>{' '}
            <Button onClick={() => this.deleteTask(task._id)} variant="danger">Delete</Button>{' '}
            <Button variant="secondary">Completed</Button>
          </div>
        </Card.Body>
      </Card>
    ))
    return (
      <>
        <div>
          <h3>Your Bucket list</h3>
          <h5>{this.state.list.name}</h5>
          <p>Month: {this.months[this.state.list.month]}</p>
          {user._id === owner && (
            <>
              <Button onClick={this.destroy}>Delete This List</Button>{' '}
              <Button onClick={() => history.push(`/lists/${match.params.id}/update-list`)}>
              Edit
              </Button> {' '}
              <Button onClick={() => history.push(`/lists/${match.params.id}/create-task`)}>Create Task</Button>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap'
              }}>
                {showTasks}
              </div>
            </>
          )}
        </div>
      </>
    )
  }
}
export default withRouter(ShowList)
