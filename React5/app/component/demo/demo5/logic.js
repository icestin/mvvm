import apiRequestAsync from '../../../../public/js/apiRequestAsync';
export default {
  defaults(props) {
    return {
      list: []
    };
  },

  handleAdd({getState, setState}, title) {
      if (title) {
          let list = getState().list;
          list.push({
              id: list.length + 1,
              title: title,
              status: 1 });
          setState({list: list});
      } else {
          alert('不能为空')
      }
  },

  handleItemEdit({getState, setState}, someState) {
      let {id, status} = someState, 
      list = getState().list;
      list.find(data => data.id === id).status = status;
      setState({list: list});
  },
  
  async getTodoList ({setState}) {
      let todoList = await apiRequestAsync.post('todoList');
      setState({list: todoList.list})
  }
};


//  这两个方法也叫Action,
//  当Logic与组件连接后，就可以通过组件的dispatch 方法直接调用Logic中的Action