import React, {Component} from "react";
import QrReader from "react-qr-reader";

export default class AwesomeQrReader extends Component {
  state = {
    result: "No result",
    startTimestamp: -1,
    elapsed: 0,
    done: false
  }

  handleScan = data => {

    if (!this.state.done) {
       if (data) {
         this.setState({
            result: data,
            done: true,
            elapsed: (new Date()).getTime() - this.state.startTimestamp
         });
       } 
    }
  }
  handleError = err => {
    console.error(err);
  }

  startDetect = () => {

     this.setState({
       result: "",
       startTimestamp: (new Date()).getTime(),
       elapsed: 0,
       done: false,
     });
  }

  componentDidMount = () => {

     this.startDetect();
  }

  render() {
    return (
      <div>
        <div>
            <button onClick={this.startDetect}>RESTART</button>
        </div>
        <div>
           <span>Result: </span>&nbsp;<span>{this.state.result}</span>
        </div>
        <div>
           <span>Elapsed: </span>&nbsp;<span>{this.state.elapsed}</span>
        </div>       
        <QrReader
          delay={100}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{width: "50%"}}
        />
      </div>
    );
  }
}
