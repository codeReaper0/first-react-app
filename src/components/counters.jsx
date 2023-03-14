import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="px-10 py-5">
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2 text-lg font-bold px-3 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
