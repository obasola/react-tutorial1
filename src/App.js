import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardComponent from './components/CardComponent';


/*
function App() {

  return (
    <div className="App">
     <h1>The GitHub Card App</h1>
     <br/>
     <span>
       <input type="text"></input>
       <button>Submit</button>
     </span>
    </div>
  );
}


*/

class App extends React.Component {
  render() {
  //  library.add(fab, faCheckSquare, faCoffee)
    //let title = "The GitHub Card App";
    return <div>
            <h1>{this.props.title}</h1>
             <br/>
            <span>
              <input type="text"></input>              
              <button className="btn btn-primary">Submit</button>
              <br/>
              <CardComponent />
            </span>
          </div>
  }
}

export default App;