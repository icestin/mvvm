import apiRequestAsync from "../../../../public/js/apiRequestAsync";
export default {
  defaults(props) {
    return {
      step: 1,
      back: false,
      list: [],
    //   step: 1, // 记录步骤数，初始化为第1步
    //   back: false // 是否前进与后退操作
    };
  },
  // 实现后退功能
  back({ setState }, data, step) {
    setState({ back: true, list: data, step: step });
  },

  handleAdd({ getState, setState }, title) {
    if (title) {
      let list = getState().list;
      list.push({
        id: list.length + 1,
        title: title,
        status: 1
      });

      setState({
        list: list,
        step: getState().step + 1,
        back: false
      });
    } else {
      alert("不能为空");
    }
  },

  handleItemEdit({ getState, setState }, someState) {
    let { id, status } = someState,
      list = getState().list;
    list.find(data => data.id === id).status = status;
    setState({
      list: list,
      step: getState().step + 1,
      back: false
    });
  },

  async getTodoList({ setState, fn }) {
    let todoList = {};
    try {
      let todoList = await apiRequestAsync.post("todoList");
      fn.Toast.show("操作成功");
      setState({ list: todoList.list, step: 2 }); // 初始化第一步 获取数据就是第二步了
    } catch (error) {
      fn.Toast.show(error);
    }
  }
};

//  这两个方法也叫Action,
//  当Logic与组件连接后，就可以通过组件的dispatch 方法直接调用Logic中的Action
