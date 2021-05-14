import React, { Component } from 'react'
import { Form, Modal, Button } from 'semantic-ui-react'

class Edit extends Component {
  initialState = {
    form: {
      name: '',
      username: '',
    },
  }

  state = this.initialState

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      const user = this.props.getUserById(this.props.id)

      this.setState({
        form: {
          name: user.name,
          username: user.username,
        },
      })
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      form: { ...this.state.form, [name]: value },
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { name, username } = this.state.form
    const { updateRow } = this.props

    const updatedUser = {
      name,
      username,
    }

    updateRow(this.props.id, updatedUser)
    this.props.onClose()
  }

  render() {
    const { name, username } = this.state.form
    const { isOpen, onClose } = this.props

    return (
      <Modal open={isOpen} onClose={onClose} closeIcon>
        <Modal.Header>Edit User</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Form.Input label="Name" name="name" value={name} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Username"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type="submit" content="Submit" />
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Edit
