import React, {Component} from 'react';



class Counter extends Component {
    state = {
        number: 0
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });

        /*
        비 구조화 할당 1
        const { number } = this.state;
        this.setState({
            number: number - 1 
        })

        비 구조화 할당 2
        this.setState(
            ({number}) => ({
                number: number - 1
            })
        )
        */
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>Value: {this.state.number}</div>
                <br></br>
                <div>Is it a number greater than 10?</div>
                <div> {/* 삼항연산자 */}
                    {
                        this.state.number > 10 && 
                        (<div>Yes</div>)
                    }
                </div>
                <button onClick = {this.handleIncrease}>+</button>
                <button onClick = {this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;