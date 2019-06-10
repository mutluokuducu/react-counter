import React, {Component} from 'react';
import NavBar from './components/navBar'
import './App.css';
import Counter from "./components/counter";

class App extends Component {
    state = {
        counters:[
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
    };
//cstt
    constructor() {
        super();
        console.log("cons work");
    }

    handleIncrement=counter=>{
        const {counters, index} = this.extracted(counter);
        counters[index].value++;
        this.setState({counters});
    };
    handleDecrement=counter=>{
        const {counters, index} = this.extracted(counter);
        /* eslint-disable-next-line no-unused-expressions*/
        counters[index].value===0? 0: counters[index].value--;
        this.setState({counters});
    };


    extracted(counter) {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        return {counters, index};
    }

    handleDelete = (counterId) =>{
        const counters=this.state.counters.filter(x=>x.id!==counterId)
        this.setState({counters:counters});

    };
    handleReset=()=>{
        const counters=this.state.counters.map(x=>{
            x.value=0;
            return x;
        });
        this.setState({counters});
    };

    sumTotalCounters=()=>{
        const counterSum = this.state.counters.reduce((a,b) => a + b.value, 0);
        return counterSum;
    };
    render() {

        return (

            <React.Fragment>
                <NavBar
                    counted={"COUNTED:"+this.state.counters.filter(x=>x.value>0).length}
                    sum={"SUM VALUE :"+this.sumTotalCounters()
                    }>
                </NavBar>

                <main className="container">
                    <button
                        //key={this.props.counters.id}
                        onClick={this.handleReset}
                        className="btn btn-primary m-2">Reset
                    </button><br/>

                    {this.state.counters.map(counter=>
                        <Counter
                            key={counter.id}
                            onDelete={this.handleDelete}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            // id={counter.id}
                            // value={counter.value}
                            counter={counter}

                        />)}
                </main>
             </React.Fragment>

        );
    }
}

export default App;

