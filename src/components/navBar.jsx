import React, {Component} from 'react';
class navBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                  <span className="navbar-text">

                      <h3 className="badge-info">
                      {this.props.counted}
                      {this.props.sum}
                      </h3>

                  </span>
            </nav>
        );
    }
}

export default navBar;
