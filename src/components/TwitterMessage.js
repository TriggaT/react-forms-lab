import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleInput = (e) => {
    let text = e.target.value 
    if (text.length <= this.props.maxChars){
      this.setState({
        message: text
      })
    }    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} id="message" onChange={this.handleInput}/>
        <p>Length: {this.props.maxChars - this.state.message.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;
