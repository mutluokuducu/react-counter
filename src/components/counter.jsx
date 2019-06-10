import React, {Component} from 'react';

class counter extends Component {

    render() {
        return (
            <React.Fragment>

                <span className={this.getBadgeClasses()}style={{width:'70px'}}><h3>{this.formatCount()}</h3></span>

                <button
                    onClick={()=>this.props.onIncrement(this.props.counter)}
                    className="btn btn-dark m-2"> +
                </button>
                <button
                    onClick={
                       ()=>this.props.onDecrement(this.props.counter)}
                    className="btn btn-dark m-2"> -
                </button>
                <button
                    onClick={()=>this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger m-2"> Delete
                </button>
                <br/>

            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const {value}=this.props.counter;
        return value===0 ? "zero":value;
    }
}
export default counter;
