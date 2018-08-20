import React from 'react'
import { connect } from 'react-redux'

class DisplayButtons extends React.Component {
    displayAll = () => {
        this.props.onDisplayAll()
    }
    displayDone= () => {
        this.props.onDisplayDone()
    }
    displayActive = () => {
        this.props.onDisplayActive()
    }
    render() {
        return <div className="btn-group" role="role">
            <button type="button" className="btn btn-outline-secondary" onClick={this.displayAll}>All</button>
            <button type="button" className="btn btn-outline-secondary" onClick={this.displayDone}>Done</button>
            <button type="button" className="btn btn-outline-secondary" onClick={this.displayActive}>Active</button>
        </div>
    }
}

export default connect(
    state => ({
        displayFilter: state.displayFilter
    }),
    dispatch => ({
        onDisplayAll: () => {
            dispatch({ type: 'DISPLAY_ALL' })
        },
        onDisplayDone: () => {
            dispatch({ type: 'DISPLAY_DONE' })
        },
        onDisplayActive: () => {
            dispatch({ type: 'DISPLAY_ACTIVE' })
        }
    })
)(DisplayButtons)