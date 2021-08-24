/* eslint-disable node/handle-callback-err */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showList } from '../../api/list'

class ShowList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: null
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

  render () {
    if (this.state.list === null) {
      return 'Loading...'
    }
    return (
      <>
        <div>
          <h3>Show one bucket list page</h3>
          <h5>{this.state.list.name}</h5>
          <p>Month: {this.months[this.state.list.month]}</p>
          {/* <ul>{listJsx}</ul> */}
          <button onClick={this.destroy}>Delete This From Your List</button>
        </div>
      </>

    )
  }
}
export default withRouter(ShowList)
