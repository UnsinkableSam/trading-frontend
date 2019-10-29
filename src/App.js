import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Stocks from "./components/Stocks/Stocks";
import Account from "./components/Account/Account";
import { BrowserRouter as Router, Route} from "react-router-dom";
import TokenComponent from './api/TokenComponent';
import graph from './components/graph/graph';

function App() {
  let token = TokenComponent.getToken();
  let accountPage = <Route path="/Account" exact component={Account} />;
  let graphPage = <Route path="/graph/:name" exact component={graph} />;
  let stockPage = <Route path="/Stocks" exact component={Stocks} />;
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        {token ? accountPage : null}
        {/* <Route path="/Account" exact component={Account} /> */}
        <Route path="/Login" component={Login} />
        <Route path="/Register" exact  component={Register} />
        {/* <Route path="/Stocks"  exact component={Stocks} /> */}
        <Route path="/Logout" exact component={Logout} />
        {token ? graphPage  : null}
        {/* <Route path="/graph/:name" exact component={graph} /> */}
        {token ? stockPage : null}
        <Footer />
      </div>
      
    </Router>
    
  );
}

const Home = () => (
  <div>
    <h1>Investment</h1>
    <p>Secure investments are real
in our company!

Our expertise helps us in effective investment management.   </p>
    <p>We maximize profits while minimizing risks – thus, every investment brings income.</p>
    <p> Just try right now and see for yourself!</p>
  </div>
);

export default App;
