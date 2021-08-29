import React, { Component } from 'react'
import { indexList } from '../../api/list'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import logo from '../pictures/NavBarLogo.png'
import Card from 'react-bootstrap/Card'

class IndexList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: [],
      loading: false
    }
  }

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

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
      listJsx = <h3>No list, go create some</h3>
    } else {
      // filter through list and return lists where owner matches user id
      const filteredList = list.filter(list => user._id === list.owner)
      listJsx = filteredList.map(list => (
        <h3 className='p-3' key={list._id}>
          <Link to={`/lists/${list._id}`}>{list.name}</Link>
          <p style={{ fontSize: '15px', color: 'DarkGray' }}>- {this.months[list.month]}</p>
        </h3>
      ))
    }

    return (
      <div className='text-center'>
        <img src={logo} className='img-fluid' /> <br />
        {/* <Link className='link-warning' variant='outline-dark' to={'/create-list'}>
          <Button className='grad' variant='outline-dark' style={{ margin: '20px 0' }}>Create List</Button>
          {listJsx}
        </Link> */}

        <Card className='card-grad m-0' style={{
          width: '100%',
          height: '80vh',
          color: 'white'
        }}>
          <Card.Header className='dark-bg text white'>
            <div className='d-flex justify-content-end'>
              <p className='text-center' style={{ margin: 'auto', paddingLeft: '6rem' }}>Lists:</p>
              <Link className='link-warning' variant='outline-dark' to={'/create-list'}>
                <Button className='grad' variant='outline-dark' >Create List</Button>
              </Link>

            </div>
          </Card.Header>
          <Card.Body className='dark-bg d-flex justify-content-start justify-content-md-center flex-wrap'>
            {listJsx}
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default IndexList
