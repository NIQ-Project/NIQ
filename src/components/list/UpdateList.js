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

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showList(match.params.id, user)
      .then((res) => this.setState({ list: res.data.list }))
      .then(() =>
        msgAlert({
          heading: 'Show list success',
          message: 'Check out the list',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Show list failed, try again!',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

 handleChange = (event) => {
   // because `this.state.list` is an object with multiple keys, we have to do some fancy updating
   const userInput = { [event.target.name]: event.target.value }
   this.setState((currState) => {
     // "Spread" out current movie state key/value pairs, then add the new one at the end
     // this will override the old key/value pair in the state but leave the others untouched
     return { list: { ...currState.list, ...userInput } }
   })
 }

 handleSubmit = (event) => {
   event.preventDefault()

   const { user, msgAlert, history, match } = this.props

   updateList(this.state.movie, match.params.id, user)
     .then((res) => history.push('/list/' + match.params.id))
     .then(() =>
       msgAlert({
         heading: 'List Updated!',
         message: 'Nice work, go check out your list.',
         variant: 'success'
       })
     )
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
   return (
     <div>
       <Form onSubmit={this.handleSubmit}>
         <Form.Group controlId='name'>
           <Form.Label>List name</Form.Label>
           <Form.Control
             required
             name='name'
             value={list.name}
             placeholder='Bucket List Name'
             onChange={this.handleChange}
           />
           {list.name}
           <Dropdown>
             <Dropdown.Toggle variant="danger" id="dropdown-basic">
               {dropdownMonth}
             </Dropdown.Toggle>

             <Dropdown.Menu>
               <Dropdown.Item onClick={this.handleDropdown} name='0'>January</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='1'>February</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='2'>March</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='3'>April</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='4'>May</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='5'>June</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='6'>July</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='7'>August</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='8'>September</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='9'>October</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='10'>November</Dropdown.Item>
               <Dropdown.Item onClick={this.handleDropdown} name='11'>December</Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
         </Form.Group>
         <Button type="submit">Update Bucket List</Button>
       </Form>
     </div>
   )
 }
}

export default withRouter(UpdateList)
