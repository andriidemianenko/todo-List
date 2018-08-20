import React from 'react'

class NavBar extends React.Component {
    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">React-Redux TodoList</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Contacts</a>
                    </div>
                </div>
            </nav>
        </div>
    }
}

export default NavBar