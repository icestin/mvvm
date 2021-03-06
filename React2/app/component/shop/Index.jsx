import React from 'react';
// import '../../../public/css/shop.pcss'
// import Seconds from '../common/Seconds'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id:1, title:'列表1'},
                {id:2, title:'列表2'},
                {id:3, title:'列表3'},
                {id:4, title:'列表4'},
                {id:5, title:'列表5'},
                {id:6, title:'列表6'},
            ]
        }
    }
    handleItemDel (id) {
        console.log("数据项ID",id);
        let list = this.state.list;
        list.splice(list.findIndex(data=>data.id===id),1);
        this.setState({list: list})
    }
    render() {
        let { list } = this.state;
        return (
            <div className="content">
             {
                list.map((data, index)=>{
                     return (<li key={data.id}> {data.title} 
                     {/* <button onClick = {this.handleItemDel.bind(this,data.id)}>删除</button></li>) */}
                     <button onClick = {()=>this.handleItemDel(data.id)}>删除</button></li>)
                 })
             }
            </div>
        )
    }
}

export default Index;