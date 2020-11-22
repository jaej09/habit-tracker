import React, { Component } from 'react';

class Habit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  // render 함수는 데이터가 변경될 때 마다 계속해서 호출이 됨
  // render 함수 내부에 있는 <button></button>에 직접 위에 있는 함수를 주게 되면
  // onClick={ () => { this.props.onDelete } }
  // render() 함수가 호출이 될 때 마다 함수가 생성이 된다는 단점이 있음
  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>

        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square" />
        </button>

        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square" />
        </button>

        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fas fa-trash" />
        </button>
      </li>
    );
  }
}

export default Habit;
