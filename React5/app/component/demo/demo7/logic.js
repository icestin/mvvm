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
              status: 1,
              isLoading: true,
              isEmpty: false
            
            });
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
  
  async getTodoList ({setState, fn}) {
      let todoList = {};
      try {
          let todoList = await apiRequestAsync.post('todoList');
          setTimeout( () => {
             if (todoList.list.length > 0) {                 
                 fn.Toast.show('操作成功');
                 setState({list: todoList.list, isLoading: false})
             } else {
                 fn.Toast.show('暂无数据');
                 setState({isLoading: false, isEmpty: true})
             }
          }, 2000)
      } catch (error) {
          fn.Toast.show('操作失败');
      }
  }
};


//  这两个方法也叫Action,
//  当Logic与组件连接后，就可以通过组件的dispatch 方法直接调用Logic中的Action