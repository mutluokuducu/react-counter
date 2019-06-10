import React, {Component} from 'react';

class counter extends Component {

    render() {
        return (
            <React.Fragment>

                <div className="row">
                    <div className="col-1">
                        <span className={this.getBadgeClasses()}><h3>{this.formatCount()}</h3></span>
                    </div>
                    <div className="col-3">
                        <button
                            onClick={()=>this.props.onIncrement(this.props.counter)}
                            className="btn btn-dark m-2"> +
                        </button>
                        <button
                            onClick={
                                ()=>this.props.onDecrement(this.props.counter)}
                            className="btn btn-dark m-2" disabled={this.props.counter.value===0?"disable":""}> -
                        </button>
                        <button
                            onClick={()=>this.props.onDelete(this.props.counter.id)}
                            className="btn btn-danger m-2"> X
                        </button>
                        <br/>
                    </div>
                </div>




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
