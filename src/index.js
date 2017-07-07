import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { Router, Route, hashHistory, Link, IndexLink, IndexRoute } from 'react-router';
import { persistStore, autoRehydrate } from 'redux-persist';
import CookieStorage from 'redux-persist-cookie-storage';
import HomeContainer from './home/Home.js';
import HomeReducer from './home/Home.reducer.js';
import TargetReducer from './target/Target.reducer.js';
import TargetContainer from './target/Target.js';
import './index.css';

const reducer = Redux.combineReducers({
  home: HomeReducer,
  target: TargetReducer
})

const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    Redux.compose(autoRehydrate())
);

persistStore(store, { storage: new CookieStorage() });


class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar emph">
          <IndexLink to="/" className="app_title">Acquisition Pipeline</IndexLink>
        </div>
        <div className="app_body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const AppLayoutContainer = ReactRedux.connect(
    state => ({state})
)(AppLayout);


ReactDOM.render(
    <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayoutContainer}>
          <IndexRoute component={HomeContainer}/>
          <Route path='/target' component={TargetContainer} />
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
