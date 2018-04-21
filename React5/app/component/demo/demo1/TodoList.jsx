import React from "react";
// import '../../../../public/css/todoList.pcss'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          title: "项目1",
          status: 1
        },
        {
          id: 2,
          title: "项目2",
          status: 1
        }
      ]
    };
  }
  //新增
  handleAdd() {
    let item = this.refs["todoInput"].value;
    if (item) {
      let list = this.state.list;
      list.push({
        id: list.length + 1,
        title: item,
        status: 1
      });
      this.setState(
        {
          list: list
        },
        () => console.log("当前集合", this.state.list)
      );
    }
  }
  // 删除事件
  handleItemDel(id) {
    let list = this.state.list;
    list.find(data => data.id === id).status = 0;
    this.setState({
      list: list
    });
  }
  componentDidMount() {}

  render() {
    let list = this.state.list;
    return (
      <div className="todoList">
        <input type="text" ref="todoInput" />
        <button onClick={this.handleAdd.bind(this)}> 添加</button>
        <div className="list">
          {list.map(data => {
            if (data.status === 1) {
              return (
                <li key={data.id}>
                  {data.title}
                  <button onClick={() => this.handleItemDel(data.id)}>
                    删除
                  </button>
                </li>
              );
            } else {
              return false;
            }
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
