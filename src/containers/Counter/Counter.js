import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResult,
} from "../../store/actions/index";

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
        <button onClick={() => onStoreResult(ctr)}>Store Result</button>
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
    ctr: state.ctr.counter,
    results: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubtractCounter: () => dispatch(subtract(4)),
    onStoreResult: (result) => dispatch(storeResult(result)),
    onDeleteResult: (id) => dispatch(deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
