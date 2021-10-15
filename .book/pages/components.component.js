import React, { useState } from 'react';
import { useCss, k } from 'kremling';
import { CenterContainer, Tab } from 'stem-ui/components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Menu } from '../components/menu.component';
import { ComponentProps } from './component-props.component';
import { ComponentDetails } from './component-details.component';

export function Components({ components }) {
  const scope = useCss(css);
  const [tab, setTab] = useState('prop');
  return (
    <CenterContainer>
      <div {...scope} className="component">
        <Menu components={components} />
        <div className="component-content">
          {components.map(component => (
            <Route
              key={component.name}
              path={`/components${component.path}`}
              render={() => {
                return (
                  <div>
                    <h1>{component.name}</h1>
                    <p>{component.description}</p>
                    <Tab>
                      <Tab.Link to={`/components${component.path}/props`}>
                        Props
                      </Tab.Link>
                      <Tab.Link to={`/components${component.path}/details`}>
                        Details
                      </Tab.Link>
                    </Tab>
                    <div className="sui-mb-24" />
                    <Switch>
                      <Route
                        path={`/components${component.path}/props`}
                        render={() => <ComponentProps props={component.props} />}
                      />
                      <Route
                        path={`/components${component.path}/details`}
                        render={() => <ComponentDetails props={component.props} />}
                      />
                      <Redirect to={`/components${component.path}/props`} />
                    </Switch>
                  </div>
                );
              }}
            />
          ))}
        </div>
      </div>
    </CenterContainer>
  );
}

Components.propTypes = {};

const css = k`
  .component {
    display: flex;
  }
  .component-content {
    padding: 24rem;
    flex-grow: 1;
  }
`;
