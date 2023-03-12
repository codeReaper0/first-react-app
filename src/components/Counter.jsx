import React, {Component} from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <div className="m-4 space-x-5">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="p-3 bg-gray-800 hover:bg-gray-900 rounded-lg text-white text-xl font-semibold"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let numberClass = "text-xl font-bold p-3 rounded-lg ";
    numberClass += this.state.count === 0 ? "bg-yellow-500" : "bg-blue-700";
    return numberClass;
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
