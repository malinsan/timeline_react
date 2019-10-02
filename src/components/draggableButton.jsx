import React from 'react'
import Draggable from 'react-draggable'
import { Button } from 'antd'

export class DraggableButton extends React.Component {
    state = {
        value: 0
    }

    handleDrag(e) {
        this.setState({ value: this.state.value + e.movementY }, this.props.onDrag(this.state.value))
    }

    render() {
        return (
                <Draggable
                    axis='y'
                    bounds='parent'
                    onDrag={this.handleDrag.bind(this)}>
                    <div>Hejsan</div>
                </Draggable>
        )
    }
}