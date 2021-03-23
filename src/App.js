import React, { Fragment, } from 'react';
import Navbar from "./Components/Navbar";
import AccountProfile from "./Components/AccountProfile";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
const App = () => (
  <Fragment>
    <Navbar/>
    <Container>
      <Switch>
        <Route
          exact path="/"
          render={ () => <div>Home</div> }
        />
        <Route
          exact path="/account/profile"
          render={ () => <AccountProfile /> }
        />
      </Switch>
    </Container>
  </Fragment>
)
export default App;
