import * as React from 'react';
import { useCss, k } from 'kremling';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/header.component';
import { Home } from './pages/home.component';
import { Components } from './pages/components.component';

export function Root({ components }) {
  const scope = useCss(css);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/components" render={props => <Components {...props} components={components} />} />
      </Switch>
    </BrowserRouter>
  );
}

Root.propTypes = {};

const css = k`
  .content {
    margin-left: 300rem;
    min-height: 100%;
    position: relative;
    padding: 40rem;
  }
`;
