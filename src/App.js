import React from "react";
import { Provider } from "./Context";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import About from "./component/About";
import Contacts from './component/Contacts'
function App() {
  return (
    <div className="App">
      {/* this is where we will provide state management connection */}
      <Provider>
        <div>
          <BrowserRouter>
            <Header branding="User Manager"></Header>
            <div className="conatiner">
              <Switch>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/" component={Contacts}></Route>
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
