/* eslint-disable node/handle-callback-err */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showTask, deleteTask } from '../../api/task'
import Button from 'react-bootstrap/Button'

class ShowTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      task: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showTask(match.params.id, user)
      .then((res) => this.setState({ list: res.data.task }))
      .then(() =>
        msgAlert({
          heading: 'Show task was a success',
          message: 'Check out your tasks',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Show task failed',
          message: 'Something went wrong',
          variant: 'danger'
        })
      )
  }

destroy = () => {
  const { match, user, msgAlert, history } = this.props
  deleteTask(match.params.id, user)
    // Redirect to the list  of task
    .then(() => history.push('/lists'))
    .then(() =>
      msgAlert({
        heading: 'Successfully Deleted',
        message: 'Your task no longer exists',
        variant: 'success'
      })
    )
    .catch((err) =>
      msgAlert({
        heading: 'Failed to Delete task',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      })
    )
}

render () {
  if (this.state.task === null) {
    return 'Loading...'
  }

  const { history, match } = this.props
  return (
    <>
      <div>
        <h3>show task</h3>
        <h5>{this.state.list.name}</h5>
        <p>Month: {this.months[this.state.task.month]}</p>

        <button onClick={this.destroy}>Delete This List</button>
        <Button
          onClick={() =>
            history.push(`/tasks/${match.params.id}/update-task`)}>
            Edit
        </Button>
        
      </div>
    </>
  )
}
}
export default withRouter(ShowTask)
