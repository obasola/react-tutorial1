import "./App.css";
import React from "react";
import CardComponent from "./components/CardComponent";

class App extends React.Component {
  render() {
    //  library.add(fab, faCheckSquare, faCoffee)
    //let title = "The GitHub Card App";
    return (
      <div style={{ margin: "10 0 0 0" }}>
        <h1>{this.props.title}</h1>
        <br />
        <span>
          <input type="text"></input>
          <button className="btn btn-primary">Submit</button>
          <br />
          <CardComponent />
        </span>
      </div>
    );
  }
}

export default App;
