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

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showList(match.params.id, user)
      .then((res) => this.setState({ movie: res.data.list }))
      .then(() => msgAlert({
        heading: 'show bucket list was a success',
        message: 'check out your list',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'show list failed',
        message: 'something went wrong',
        variant: 'danger'
      }))
  }

  render () {
    if (this.state.list === null) {
      return 'loading...'
    }
    return (
      <>
        <h3>Show one bucket list page</h3>
        <h5>{this.state.list.name}</h5>
        <h6>hello</h6>
        <p>Month:{this.month}</p>
        <button onClick={this.destroy}>Delete This From Your List</button>
      </>
    )
  }
}
export default withRouter(ShowList)
