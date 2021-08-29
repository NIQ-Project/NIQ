import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// API request
import { updateList, showList } from '../../api/list'

class UpdateList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: {
        name: '',
        month: 0
      },
      dropdownMonth: 'Month'
    }
  }

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showList(match.params.id, user)
      .then((res) => this.setState({ list: res.data.list }))
      .catch((err) =>
        msgAlert({
          heading: 'Show list failed, try again!',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

  handleChange = (event) => {
    const copiedList = Object.assign(this.state.list)
    if (event.target.name === 'name') {
      // copies list object then alters the value(event target value)
      copiedList[event.target.name] = event.target.value
    } else {
      // set copied month to event.target.name(number) and set dropdownMonth to months array index event.target.name(number)
      copiedList.month = event.target.name
      this.setState({ dropdownMonth: this.months[event.target.name] })
    }
    this.setState({ list: copiedList })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, history, match } = this.props

    updateList(this.state.list, match.params.id, user)
      .then((res) => history.push('/lists/' + match.params.id))
      .catch((err) => {
        msgAlert({
          heading: 'List update failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { list, dropdownMonth } = this.state

    const date = new Date()
    const filteredMonths = this.months.filter((month, i) => i >= date.getMonth())
    const dropdownJSX = filteredMonths.map(month => (
      <Dropdown.Item key={month} onClick={this.handleChange} name={this.months.indexOf(month)}>{month}</Dropdown.Item>
    ))

    return (
      <div>
        <Form onSubmit={this.handleSubmit} className='text-center' >
          <Form.Group controlId='name'>
            <h3 className='text-white'>Edit List</h3>
            <Form.Label className='text-white'>List name</Form.Label>
            <Form.Control
              required
              name='name'
              value={list.name}
              placeholder='List Name'
              onChange={this.handleChange}
              style={{ width: '96.5%' }}
              className='mx-auto'
            />
            <div>
              <Dropdown className='p-4' >
                <Dropdown.Toggle variant="warning" id="dropdown-basic" >
                  {dropdownMonth}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {dropdownJSX}
                </Dropdown.Menu>
              </Dropdown>
              <Button type="submit" className='grad' variant='outline-dark' >Update List</Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default withRouter(UpdateList)
