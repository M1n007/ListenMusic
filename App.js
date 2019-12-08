import React, { Component } from "react";

import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import RootNavigator from "./packages/navigators/RootNavigator";
import Reducers from "./packages/redux/rootReducers";

let store = createStore(Reducers);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
