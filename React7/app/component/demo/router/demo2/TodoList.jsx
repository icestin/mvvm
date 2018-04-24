import React from "react";
import "babel-polyfill";
import List from "./List";

// import '../../../../public/css/todoList.pcss'
import apiRequest from '../../../../../public/js/apiRequest';
import apiRequestAsync from "../../../../../public/js/apiRequestAsync";
import utils from "../../../../../public/js/utils";

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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleItemDel = this.handleItemDel.bind(this);
    this.handleItemRecovery = this.handleItemRecovery.bind(this);
    this.handleItemEdit = this.handleItemEdit.bind(this);
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
    } else {
      alert("不能为空");
    }
  }
  handleItemEdit(id, type) {
    let list = this.state.list;
    list.find(data => data.id === id).status = type;
    this.setState({
      list: list
    });
  }
  // 删除事件
  handleItemDel(id) {
    let list = this.state.list;
    list.find(data => data.id === id).status = 0;
    this.setState({
      list: list
    });
  }
  // 恢复
  handleItemRecovery(id) {
    let list = this.state.list;
    list.find(data => data.id === id).status = 1;
    this.setState({ list: list });
  }

  async handleTodoList() {
    let todoList = await apiRequestAsync.post("todoList");
    this.setState({ list: todoList.list });
    let todoList1 = await apiRequestAsync.post("todoList");
    // console.log("todoList1", todoList1);
    let todoList2 = await apiRequestAsync.post("todoList");
    // console.log("todoList2", todoList2);
  }
  
  componentDidMount() {
    this.handleTodoList();
    // apiRequest.get('todoList', {}, data=> this.setState({list: data.list}))
  }

  render() {
    let list = this.state.list;
    let { location } = this.props;
    return (
      <div className="todoList">
        <input type="text" ref="todoInput" />
        <button onClick={this.handleAdd.bind(this)}> 添加</button>

        <div className="cont">
          <div className="box">
            全部
            <List list={list} handleItemEdit={this.handleItemEdit} type={0} />
          </div>
        </div>

        <div className="cont">
          <div className="box">
            未删除
            <List list={list} handleItemEdit={this.handleItemEdit} type={1} />
          </div>
        </div>

        <div className="cont">
          <div className="box">
            已删除
            <List list={list} handleItemEdit={this.handleItemEdit} type={2} />
          </div>
        </div>
        {location ? (
          <div>
            <div>hash: {location.hash} </div>
            <div>pathname: {location.pathname} </div>
            <div>search: {location.search} </div>
            <div>search提取: {utils.urlParam("sort", location.search)} </div>
            <div>state: {location.state && location.state.fromDashboard} </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TodoList;
