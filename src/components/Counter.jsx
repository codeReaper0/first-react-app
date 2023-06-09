import React, {Component} from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <div className="m-4 space-x-5">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="py-3 w-12 bg-gray-600 hover:bg-gray-700 rounded-lg text-white text-xl font-semibold"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>

        <button
          className={this.decrementClass()}
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>

        <button
          className="py-3 w-12 bg-red-700 hover:bg-red-800 rounded-lg text-white text-xl font-semibold"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          x
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
  decrementClass() {
    let decrementClass =
      "py-3 w-12  rounded-lg text-white text-xl font-semibold ";

    decrementClass +=
      this.props.counter.value === 0
        ? "bg-gray-300"
        : "bg-gray-600 hover:bg-gray-700";
    return decrementClass;
  }
}

export default Counter;
