import React, { Component } from 'react'
import { indexList } from '../../api/list'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

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
    const { user } = this.props
    indexList(user)
      .then((res) => {
        this.setState({
          list: res.data.lists
        })
      })
      .catch(console.error)
  }

  // render
  render () {
    const { list } = this.state
    const { user } = this.props

    let listJsx
    if (list.length === 0) {
      listJsx = 'No list, go create some'
    } else {
      // filter through list and return lists where owner matches user id
      const filteredList = list.filter(list => user._id === list.owner)
      listJsx = filteredList.map(list => (
        <li key={list._id}>
          <Link to={`/lists/${list._id}`}>{list.name}</Link>
        </li>
      ))
    }

    return (
      <div>
        <h3> Your List:</h3>
        <Link to={'/create-list'}>
          <Button>Create A List</Button>
        </Link>
        <ul>{listJsx}</ul>
      </div>
    )
  }
}

export default IndexList
