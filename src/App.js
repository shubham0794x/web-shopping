import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
