import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    bookDetails: "",
    error: ""
}

fetchBookDetails = () => {
  axios
      .get("/book/100")
      .then(res=>{
        console.log(res.data)
        this.setState({bookDetails:JSON.stringify(res.data)})
      })
      .catch(err=>{
        this.setState({error: err.toString() })
    
      });
};

render() {
  return (
    <div>
      <p> Hi From React</p>
      <p>{this.state.bookDetails}</p>

      <p>{this.state.error}</p>
      <button onClick={this.fetchBookDetails}>Fetch Book Data</button>
  </div>

  )};

}



export default App;
