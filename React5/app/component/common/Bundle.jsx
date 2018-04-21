import React, { Component } from "react";

class Bundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load(mod => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children[1](this.state.mod) : null; //报错后改为这样
    // return this.state.mod ? this.props.children(this.state.mod) : null;
  }

}
const BundleFun = (Component, props) => (
  <Bundle load={ Component }> { Component => <Component {...props} />}</Bundle>
);

export { Bundle, BundleFun };
