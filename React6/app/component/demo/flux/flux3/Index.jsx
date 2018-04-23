import React from 'react';
import {Container} from 'flux/utils';
import TodoActions from './TodoActions';
import TodoStore from './TodoStore';
import Main from './Main';
// 建立联系
function getStores () {
    return [
        TodoStore
    ];
}

function getState () {
    return {
        state: TodoStore.getState(),
        addTodo: TodoActions.addTodo,
        itemEdit: TodoActions.itemEdit,
    }
}

export default Container.createFunctional(Main, getStores, getState);