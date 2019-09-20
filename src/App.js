import React, { Component } from 'react';
import './App.css';
import logo from './exercise/logo.png'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notifySubmitted: false
    }
  }

  submitForm = () => {
    this.setState({
      notifySubmitted: true
    })
  }
  render() {
    return (
      <div className="App">
        <nav>
          <a className="hshop" href="https://shop.hodinkee.com">
            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.37939 1L0.843861 4.53553L4.37939 8.07107" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel"/>
            </svg>&nbsp;<p>H SHOP</p>
          </a>
          <a className="share" href="#"><p>SHARE&nbsp;</p> <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.63194 0.00297306C8.68816 0.0118216 8.74137 0.0384135 8.78608 0.0799974L13.8773 4.82054C13.9547 4.8924 14 5.00283 14 5.11979C14 5.23676 13.9547 5.34719 13.8773 5.41905L8.78608 10.1596C8.6905 10.2471 8.56164 10.2628 8.4532 10.2C8.34477 10.1373 8.27538 10.0069 8.27396 9.86329V7.78338C7.43053 7.77352 3.4258 7.88593 0.527768 10.9062C0.419962 11.0186 0.26245 11.0313 0.142926 10.9372C0.0234022 10.8432 -0.0286819 10.6656 0.0156715 10.5033C1.34476 5.62278 5.398 3.47671 8.27396 2.56287V0.382216C8.27325 0.27286 8.31218 0.16846 8.38076 0.0958051C8.44934 0.0231503 8.5409 -0.0106879 8.63194 0.00297306Z" fill="white"/>
            </svg>
          </a>
        </nav>
        <div className="info">
          <div className="logo">
            <img src={logo} alt="" className="hodinkee"/>
            <p className="date">Coming 06.26.19</p>
          </div>
          <form onSubmit={this.submitForm}>
            <input type="email" placeholder="Your email address"/>
            <button type="submit">NOTIFY ME</button>
          </form>
          {this.state.notifySubmitted && <p className="interest">Thank you for your interest!</p>}
        </div>
        
      </div>
    );
  }
}

export default App;
