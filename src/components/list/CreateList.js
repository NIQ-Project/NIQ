import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createList } from '../../api/list'

class CreateList extends Component {
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
    const { user, msgAlert, history } = this.props

    createList(this.state.list, user)
      .then(res => history.push('/lists/' + res.data.list._id))
      .then(() => msgAlert({
        heading: 'List created Successfully',
        message: 'nice work go check out your list',
        variant: 'success'
      }))
      .catch(err => {
        msgAlert({
          heading: 'list creation failed',
          message: 'something went wrong ' + err.message,
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
        <Form onSubmit={this.handleSubmit} className='text-center'>
          <h3 className='text-white'>Create List</h3>
          <Form.Group controlId='name'>
            <Form.Label className='text-white'>List name</Form.Label>
            <Form.Control
              required
              name='name'
              value={list.name}
              placeholder='List Name'
              onChange={this.handleChange}
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
              <Button type="submit" className='grad' variant='outline-dark' >Submit</Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default withRouter(CreateList)
