import React from 'react';
import List from './List';
// import '../../../../public/css/todoList.pcss'
import apiRequest from '../../../../public/js/apiRequest';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                 id: 1,
                 title: '项目1',
                 status: 1,
                },
                {
                    id: 2,
                    title: '项目2',
                    status: 1,
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
        let item = this.refs['todoInput'].value;
        if (item) {
            let list = this.state.list;
            list.push({
                id:list.length + 1,
                title: item,
                status: 1
            })
            this.setState({
                list: list
            },()=>console.log("当前集合", this.state.list))
        } else {
            alert('不能为空')
        }
    }
    handleItemEdit (id, type) {
        let list = this.state.list;
        list.find(data=>data.id===id).status = type;
        this.setState({
            list: list
        })
    }
    // 删除事件
    handleItemDel (id) {
        let list = this.state.list;
        list.find(data=>data.id===id).status = 0;
        this.setState({
            list: list
        })
    }
    // 恢复
    handleItemRecovery (id) {
        let list = this.state.list;
        list.find(data => data.id ===id).status = 1;
        this.setState({list: list});
    }

    componentDidMount () {
        apiRequest.get('todoList', {}, data=> this.setState({list: data.list}))
    }

    render() {
        let list = this.state.list;
        return (
            <div className="todoList">
                <input type="text" ref='todoInput'/> 
                <button onClick={this.handleAdd.bind(this)}> 添加</button>

                <div className = 'cont'>
                    <div className="box"> 全部
                    <List list = {list} handleItemEdit = {this.handleItemEdit}  type = {0}/>
                    </div>
                </div>

                <div className = 'cont'>
                    <div className="box"> 未删除
                    <List list = {list} handleItemEdit = {this.handleItemEdit} type = {1}/>
                    </div>
                </div>

                <div className = 'cont'>
                    <div className="box"> 已删除
                    <List list = {list} handleItemEdit = {this.handleItemEdit} type = {2}/>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default TodoList;