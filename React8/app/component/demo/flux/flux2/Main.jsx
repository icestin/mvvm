import React from 'react';

// 从父组件拿到state状态和 add方法

class Input extends React.Component {
  render() {
    let {addTodo} = this.props;
    return (
      <div className="todoList"> 
        <input type="text" ref="todoInput" />
        <button onClick={() => addTodo(this.refs['todoInput'].value)}> 添加 </button> 
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    let {list} = this.props.state;
    return (
      <div> 
         {list.length > 0 && list.map(data => 
          <li key={data.id}> {data.title} </li>
        )}
      </div>
    );
  }
}

const Index = (props) => 
       <div className="todoList">
         <Input {...props} />
         <List {...props} />
       </div>

export default Index;