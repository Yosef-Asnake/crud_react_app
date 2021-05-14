import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import Edit from './Edit.js'

class View extends Component {
  state = {
    isOpen: false,
    id: '',
  }

  onClose = () => {
    this.setState({ isOpen: false })
  }

  onOpen = () => {
    this.setState({ isOpen: true, id: this.props.id })
  }

  render() {
    const { isOpen, id } = this.state
    const { data, deleteRow, updateRow, getUserById } = this.props

    return (
      <div>
        <Edit
          onClose={this.onClose}
          isOpen={isOpen}
          id={id}
          updateRow={updateRow}
          getUserById={getUserById}
        />
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(row => (
              <Table.Row key={row.name}>
                <Table.Cell>{row.name}</Table.Cell>
                <Table.Cell>{row.username}</Table.Cell>
                <Table.Cell>
                  <Button
                    content="Edit"
                    onClick={() => {
                      this.setState({ isOpen: true, id: row.name })
                    }}
                  />
                  <Button
                    content="Delete"
                    onClick={() => {
                      deleteRow(row.name)
                    }}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default View
