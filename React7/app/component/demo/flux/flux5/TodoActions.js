import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import apiRequestAsync from '../../../../../public/js/apiRequestAsync';

const Actions = {
    addTodo (text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text,
        })
    },

    itemEdit(obj) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ITEM_EDIT,
            obj,
        });
    },
    
    async postList() {
        let todoList = await apiRequestAsync.post('todoList');
        TodoDispatcher.dispatch({
            type: TodoActionTypes.POST_LIST,
            todoList,
        })
    },

}

export default Actions;