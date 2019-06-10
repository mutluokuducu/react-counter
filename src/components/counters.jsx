import React, {Component} from 'react';
import Counter from './counter'

class counters extends Component {

    render() {
        return (
            <React.Fragment>
            <div >

                {this.props.counters.map(counter=>
                    <Counter
                        key={counter.id}
                        onDelete={this.props.handleDelete}
                        onIncrement={this.props.handleIncrement}
                        onDecrement={this.props.handleDecrement}
                        // id={counter.id}
                        // value={counter.value}
                        counter={counter}

                    />)}

            </div>
            </React.Fragment>
        );
    }
}

export default counters;
