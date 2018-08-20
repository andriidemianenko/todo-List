import React from 'react'

class LeftNavBar extends React.Component {
    render() {
        return <div className="left-navbar">
            <div className="jumbotron">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">First Page</a>
                    <a href="#" class="list-group-item list-group-item-action">Second Page</a>
                    <a href="#" class="list-group-item list-group-item-action">Third Page</a>
                    <a href="#" class="list-group-item list-group-item-action">Fourth Page</a>
                    <a href="#" class="list-group-item list-group-item-action disabled">Fifth Page</a>
                </div>
            </div>
        </div>
    }
}

export default LeftNavBar