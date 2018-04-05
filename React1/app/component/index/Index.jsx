import React from 'react';
import '../../../public/css/index.pcss';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }))
    }

    componentDidMount() {
        this.intervar = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <div className="cont">
            
                <div className="top">这是首页<i className="bd_logo1"></i></div>
                <div className="bottom">Seconds: {this.state.seconds}</div>
            </div>
        )
    }
}

export default Index;