
import React from 'react'

class Apexchart extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Users</h1>
        <p>{params}</p>
      </div>
    )
  }
}