import React, {Component} from 'react';
import Counter from './counter'

class counters extends Component {

    render() {
        const {handleDelete,handleIncrement,handleDecrement}=this.props
        return (
            <React.Fragment>
            <div >

                {this.props.counters.map(counter=>
                    <Counter
                        key={counter.id}
                        onDelete={handleDelete}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
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
