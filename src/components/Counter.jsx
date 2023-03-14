import React, {Component} from "react";

class Counter extends Component {
  render() {
    return (
      <div className="m-4 space-x-5">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="p-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white text-xl font-semibold"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>

        <button
          className="p-3 bg-red-700 hover:bg-red-800 rounded-lg text-white text-xl font-semibold"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let numberClass = "text-xl font-bold p-3 rounded-lg ";
    numberClass +=
      this.props.counter.value === 0 ? "bg-yellow-500" : "bg-blue-700";
    return numberClass;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
