import { Component } from "react";

export default class PlayGround extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("constructior");
  }

  render() {
    console.log("this.props", this.props);
    console.log("this.state", this.state);
    return (
      <div className="container">
        <h1 className="title">React Hook - Class Component</h1>
        <div>
          <div className="content">Demo</div>
        </div>
      </div>
    );
  }
}
