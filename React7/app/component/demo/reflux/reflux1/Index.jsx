import React from 'react';
import Reflux from 'reflux';
import Action from './Actions';
import Store from './Store';

class Index extends Reflux.Component {
    constructor (props) {
        super(props);
        
        this.store = Store;
    }

    render() {
        return (
            <div className="todoList"> 
                 {this.state.num}
            <button onClick={()=>Action.add()}> + </button>
            </div>
        )
    }
}


export default Index;