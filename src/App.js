import React from 'react';
import './App.css';
import Header from './components/Navbar';
import Home from './components/Home';
import Bookcar from './components/Bookcar';
import Contact from './components/Contact';
import About from './components/About';
import paymentform from './components/Paymentform';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/bookcar" component={Bookcar} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/checkout" component={paymentform} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
