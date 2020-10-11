import React, {Component} from 'react';


// error 발생 ! 

const Problematic = () => {
    throw (new Error('버그 발견!!')); // js에서의 throw문은 사용자 정의 예외를 정의하는 것, throw이후의 코드는 작동하지 않음.
    return (
        <div>


        </div>
    )
}




class Counter extends Component {
    state = {
        number: 0,
        error: false // error라는 변수 에러
    }
    /* Life Cycle API */
    constructor(props) {
        super(props);
        console.log('constructor call');
    } 
    // 생성자 메소드로 컴포넌트가 생성될 때 단 한번만 실행됨, 
    // 이 메소드에서만 state를 설정할 수 있다.

    componentWillMount() {
        console.log('componentWillMount call');
    } 
    // React 엘리먼트를 실제 dom 노드에 추가하기 직전에 호출되는 메소드이다. 
    // DOM이 생성되지 않았으므로 DOM을 조작할 수 없고, render가 호출되기 전이기 때문에 
    // setState를 사용해도 render가 호출하지 않는다.(렌더링 되지 않는다.)
    // 지금은 사용 X
    // 최신 버전에서는 UNSAFE_componentWillMount()에서 처리된다.


    //render()가 여기서 호출됨

    componentDidMount() {
        console.log('componentDidMount call');
    }
    // 컴포넌트가 만들어지고 render가 호출 된 이후에 호출되는 메소드이다. (컴포넌트가 화면에 출력 됐을 때)
    // AJAX나 타이머를 생성하는 코드, D3/masonry처럼 DOM연동, axios/fetch등을 통하여 DOM의 속성을 관리하는 작업를 작성하는 부분이다.

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shoudComponentUpdate call');
        if (nextState.number % 5 === 0) return false; //if number가 5의 배수면 -> reRendering (X) 
        return true; // else reRendering(O)
    }
    //

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate call');
    }
    // shouldComponentUpdate가 불린 이후에 컴포넌트 업데이트 직전에서 호출되는 메소드이다.
    // 새로운 props state가 반영되기 직전 새로운 값들을 받는다.
    // 이 메소드 안에서 this.setState()를 사용하면 무한루프가 일어남


    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate call');
    }
    // 컴포넌트 업데이트 직후(렌더링 바로 직후)에 호출되는 메소드이다.

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }
    // 에러가 발생하면 호출되는 메소드이다. 
    // error를 true로 하고 render()안에서 에러 메시지를 처리한다.
    // 컴포넌트 자신의 render()에서 에러가 발생해버리면 에러를 캐치못함
    // 대신 컴포넌트의 자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있다.




    // 다른 Life Cycle도 많음. 
    getSnapshotBeforeUpdate() {}
    //등

    /* Life Cycle API */



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

    render() { // 컴포넌트 렌더링에 해당된다.
        if (this.state.error) return (<h1>Error!!!!</h1>) // 에러가 ture일때 나올 메시지 
        return (
            <div>
                <h1>Counter</h1>
                <div>Value: {this.state.number}</div>
                { this.state.number == 4 && <Problematic/> }
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