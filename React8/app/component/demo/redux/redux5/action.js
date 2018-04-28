import apiRequestAsync from '../../../../../public/js/apiRequestAsync';

// 可以返回action对象的函数
export const postList = () => async (dispatch) => {
    let todoList = await apiRequestAsync.post('todoList');
    dispatch({
        type: "POST_LIST",
        list: todoList.list
    })
};