import * as React from 'react';
import { useCss, k } from 'kremling';
import { Menu } from './components/menu.component';
import { BrowserRouter, Route } from 'react-router-dom';

import { components } from './docs';
import { Header } from './components/header.component';
import { Props } from './components/props.component';

export function Root() {
  const scope = useCss(css);
  return (
    <BrowserRouter>
      <Header />
      <Menu components={components} />
      <div {...scope} className="content">
        {components.map(comp => {
          return (
            <Route
              key={comp.name}
              render={(routeProps) => (
                <>
                  <h1>{comp.name}</h1>
                  <Props propTypes={comp.component.propTypes} />
                </>
              )}
              path={comp.path}
            />
          )
        })}
      </div>
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
