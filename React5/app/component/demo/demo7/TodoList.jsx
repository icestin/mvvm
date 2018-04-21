import React from "react";
import LogicRender, { connect } from "refast-logic-render";
// import '../../../../public/css/todoList.pcss'
import Refast, { Component } from "refast";

//引入 logic.js
import logic from "./logic";
import { Toast } from "../../common/layer/Index";

const logState = ctx => next => (...args) => {
  console.log("ctx:", ctx.getState().list, new Date().getTime());
  console.log("args:", args[0].list, new Date().getTime());
  // 如果不执行next, 则终止组件 state更新
  if (!args[0].back) {
    let refast_todoList_log = JSON.parse(
      localStorage.getItem("refast-todoList-log")
    );
    refast_todoList_log.push(args[0].list);
    localStorage["refast-todoList-log"] = JSON.stringify(refast_todoList_log);
  }
  next(...args);
};
// logState 可以是一个函数
// 也可以是一个函数组， 从前到后一次执行
Refast.use("middleware", [logState]);

@connect
class TodoList extends Component {
  constructor(props) {
    super(props, logic); // 通过super绑定logic
    // this.state = {
    //   step: 1,
    //   back: false,
    //   list: []
    // };
  }

  componentDidMount() {
    localStorage["refast-todoList-log"] = JSON.stringify([[]]);
    this.dispatch("getTodoList");
  }

  render() {
    let { list, step, isLoading, isEmpty } = this.state;
    let refast_todoList_log = JSON.parse(
      localStorage.getItem("refast-todoList-log")
    );

    let LiCont = ({ data }) => (
      <li>
        {data.title}
        <button
          onClick={() =>
            this.dispatch("handleItemEdit", {
              id: data.id,
              status: data.status === 1 ? 0 : 1
            })
          }
          className={data.status === 1 ? "del" : "recovery"}
        >
          {data.status === 1 ? "删除" : "恢复"}{" "}
        </button>
      </li>
    );

    let ListCont = ({ type }) => (
      <div className="list">
        {list.map(data => [
          type === 0 ? (
            <LiCont data={data} key={data.id} />
          ) : type === 1 && data.status === 1 ? (
            <LiCont data={data} key={data.id} />
          ) : type === 2 && data.status === 0 ? (
            <LiCont data={data} key={data.id} />
          ) : null
        ])}
      </div>
    );

    return (
      <div className="todoList">
        <input type="text" ref="todoInput" />
        <button
          onClick={() =>
            this.dispatch("handleAdd", this.refs["todoInput"].value)
          }
        >
          {" "}
          添加{" "}
        </button>
        <LogicRender
          action={"getTodoList"}
          isLoading={isLoading}
          Loading={() => <div>加载中…</div>}
          isEmpty={isEmpty}
          Empty={() => <div> 暂无数据</div>}
        >
          <div className="cont">
            <div className="box">
              {" "}
              全部
              <ListCont type={0} />
            </div>
            <div className="box">
              {" "}
              未删除
              <ListCont type={1} />
            </div>
            <div className="box">
              {" "}
              已删除
              <ListCont type={2} />
            </div>
            <Toast ref={e => Refast.use("fn", { Toast: e })} />
            <div style={{ width: "100%", float: "left", marginTop: 30 }}>
              一共 {refast_todoList_log && refast_todoList_log.length}步, 当前第{" "}
              {step}步
              <button
                onClick={() => {
                  if (step >= 2) {
                    this.dispatch(
                      "back",
                      refast_todoList_log[step - 2],
                      step - 1
                    );
                  } else {
                    alert("不能再后退了");
                  }
                }}
              >
                {" "}
                后退{" "}
              </button>
              <button
                onClick={() => {
                  if (step < refast_todoList_log.length) {
                    this.dispatch("back", refast_todoList_log[step], step + 1);
                  } else {
                    alert("不能再前进了");
                  }
                }}
              >
                {" "}
                前进
              </button>
            </div>
          </div>
        </LogicRender>
      </div>
    );
  }
}

export default TodoList;
