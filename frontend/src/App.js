import React, { Fragment, Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (


    <Fragment>
      <div className="App">
        <Header />
        <Main />
        <Footer/>
      </div>
    </Fragment>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
