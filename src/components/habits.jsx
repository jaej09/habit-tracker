import React, { Component } from 'react';

import Habit from './habit';

class Habits extends Component {
  state = {
    habits : [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ]
  };

  handleIncrement = (habit) => {
    // console.log(habit);
    const habits = [
      ...this.state.habits // habits에 있는 object 복사 => state 내부에 정의한 habits가 그대로 복사됨
    ];
    // state에 있는 habits 데이터를 복사해온 이유는?
    // state에 있는 데이터를 부분적으로 업데이트하면 리액트는 모른다.
    // 즉, 데이터 전체를 업데이트해야 리액트가 알아차림
    // this.state.habits[index].count++ (X) => 리액트가 알아차리지 못함

    const index = habits.indexOf(habit); // habits 배열에서, 함수 인자로 넘어온 habit의 index는 몇번인지 찾기 [0, 1, 2 ...]
    habits[index].count++;

    this.setState({ habits }); // 여기서 데이터 전체를 업데이트 함
  };

  handleDecrement = (habit) => {
    const habits = [
      ...this.state.habits
    ];
    const index = habits.indexOf(habit);
    const count = habits[index].count--;
    habits[index].count = count < 0 ? 0 : count; // count 값이 0 보다 작으면 habits[index].count = 0으로 설정
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id); // 함수 인자로 넘어온 habit만 제외하고 변수에 포함
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
