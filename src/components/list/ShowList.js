/* eslint-disable node/handle-callback-err */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showList, deleteList } from '../../api/list'
import Button from 'react-bootstrap/Button'
import ShowTask from '../task/ShowTask'
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
      .catch(err => msgAlert({
        heading: 'Show list failed',
        message: 'Something went wrong',
        variant: 'danger'
      }))
  }

  destroy = () => {
    const { match, user, msgAlert, history } = this.props
    deleteList(match.params.id, user)
    // Redirect to the list index
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

  render () {
    if (this.state.list === null) {
      return 'Loading...'
    }
    const { owner } = this.state.list
    const { user, history, match, msgAlert } = this.props
    const { list } = this.state
    const showTasks = list.tasks.map(task => (
      <ShowTask key={task._id} task={task} user={user} msgAlert={msgAlert} />
    ))

    return (
      <>
        <div className='text-center'>
          <h3 className='text-white'>{list.name}</h3>
          <p className='text-white'> Month: {this.months[list.month]}</p>
          {user._id === owner && (
            <>
              <Button onClick={this.destroy} className='text-white' variant='dark'>Delete List</Button>{' '}
              <Button onClick={() => history.push(`/lists/${match.params.id}/update-list`)} className='text-white' variant='dark'>
              Edit List
              </Button> {' '}
              <Button onClick={() => history.push(`/lists/${match.params.id}/create-task`)}className='text-white' variant='dark'>Create Task</Button>
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
