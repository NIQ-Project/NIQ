import React, { Component } from 'react'
import { indexList } from '../../api/list'
import { Link } from 'react-router-dom'

class IndexList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: [],
      loading: false
    }
  }

  // - lifecycle method (right away when this component renders, make a request for all the list & put em in state)
  componentDidMount = () => {
    const { user, msgAlert } = this.props
    indexList(user)
      .then((res) => {
        this.setState({
          list: res.data.lists
        })
      })
      .then(() =>
        msgAlert({
          heading: 'Index success',
          message: 'Here\'s the List',
          variant: 'success'
        })
      )
      .catch(console.error)
  }

  render () {
    const { list } = this.state

    let listJsx
    if (list.length === 0) {
      listJsx = 'No list, go create some'
    } else {
      listJsx = this.state.list.map((list) => (
        <li key={list._id}>
          <Link to={`/lists/${list._id}`}>{list.name}</Link>
        </li>
      ))
    }

    return (
      <div>
        <h3>List: </h3>
        <button>
          <Link to={'/create-list'}>Create List</Link>
        </button>
        <ul>{listJsx}</ul>
      </div>
    )
  }
}

export default IndexList
