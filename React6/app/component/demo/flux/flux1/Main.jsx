import React from 'react';

// 从父组件拿到state状态和 add方法
const Main = (props) => 
    <div className = "todoList"> 
      {props.state || 0} <button onClick={props.add.bind(this, 1)}> + </button>
    </div>

export default Main;