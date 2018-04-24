import Reflux from 'reflux';
import Action from './Actions';

class Store extends Reflux.Store {
    constructor() {
        super();
        this.listenables = Action;
        this.state = {
            list: []
        }
    }

    onAddTodo(title) {
        if(!title.trim()) {
            alert('内容不能为空');
        } else {
            let list = this.state.list;
            list.push({id: list.length + 1, title: title, status: 1})
            this.setState({num: this.state.num + 1});
        }
    }
    
    onItemEdit(obj) {
        console.log('被触发',obj);
        let {id, status} = obj;
        let list = this.state.list;
        list.find(data => data.id === id).status = status;
        this.setState({list: list});
    }
}

export default Store;