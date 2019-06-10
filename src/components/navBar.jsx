import React, {Component} from 'react';

class navBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="badge badge-pill badge-secondary">

                      <h3>
                       {this.props.sum}
                      </h3>

                  </span>
                <span className="badge badge-pill badge-secondary">
                      <h3>
                          {this.props.counted}
                      </h3>

                  </span>
            </nav>
        );
    }
}

export default navBar;
