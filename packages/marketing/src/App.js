import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import landing from './components/Landing';
import pricing from './components/Pricing';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={pricing} />
            <Route path="/" component={landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
