import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    const {
      ctr,
      results,
      onIncrementCounter,
      onDecrementCounter,
      onAddCounter,
      onSubtractCounter,
      onStoreResult,
      onDeleteResult,
    } = this.props;

    return (
      <div>
        <CounterOutput value={ctr} />
        <CounterControl label="Increment" clicked={onIncrementCounter} />
        <CounterControl label="Decrement" clicked={onDecrementCounter} />
        <CounterControl label="Add 5" clicked={onAddCounter} />
        <CounterControl label="Subtract 4" clicked={onSubtractCounter} />
        <hr />
        <button onClick={onStoreResult}>Store Result</button>
        <ul>
          {results.map((result) => (
            <li key={result.id} onClick={() => onDeleteResult(result.id)}>
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    results: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 4 }),
    onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
