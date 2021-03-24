import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import style from "./App.module.scss";

import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className={style.appWrapper}>
      <div className={style.rock}>Lets Rock! 🤘</div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/users" />
        </Route>
        <Route path="/users/:pageId?" render={() => <UsersContainer />} />
      </Switch>
    </div>
  );
}

export default App;
