import Counter from '../component/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {getRandomColor} from '../utils';
/*
  - Presentation Component : Counter
    - state 를 갖지 않고 prop 으로만 데이터를 얻어오는 것. store 에 직접 접근하지 않음
  - Container Component    : CounterContainer 
    - Store 를 이용해서 상태 관리 역할 컴포넌트
*/


// state connector
// store 안의 state 값을 props 로 연결
// If a mapStateToProps function is specified, the new wrapper component will subscribe to Redux store updates
// This means that any time the store is updated, mapStateToProps will be called
// The results of mapStateToProps must be a plain object, which will be merged into the wrapped component’s props.
const mapStateProps = (state) => (
    {color:state.color, number: state.number}
);

// action connector
// 액션 생성자를 사용하여 액션을 생성하고, 해당 액션을 dispatch 하는 함수를 만들어 이를 props 로 연결
const mapDispathtoProp = (dispatch) => ({
    onIncrement: () => dispath(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할 수행
// @api ref : https://react-redux.js.org/api/connect
// The return of connect() is a wrapper function that takes your component 
const CounterContainer = connect(mapStateProps, mapDispathtoProp)(Counter);