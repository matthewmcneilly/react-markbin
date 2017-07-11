import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
import { Bins } from '../imports/collections/bins';

// when user vists localhost:3000/ show the app component (contains header)
// when users visits localhost:3000/bins/binid show bins main
// when /bins/binid is accessed binsmain component is passed as
// props.children to the app component (app.js)
// IndexRoute is only visible if bins/binid is not being accessed
// :binId is set up as a variable and passed as props to BinsMain 
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BinsList} />
      <Route path="bins/:binId" component={BinsMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
