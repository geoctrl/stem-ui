import React, { createContext, useContext } from 'react';
import { useCss, k, a } from 'kremling';
import { Button } from 'stem-ui/components';
import { NavLink } from 'react-router-dom';

const TabContext = createContext({});

export function Tab({ children, onChange, value }) {
  const scope = useCss(css);
  return (
    <TabContext.Provider value={{ onChange, value }}>
      <div {...scope} className="sui-tab">
        {children}
      </div>
    </TabContext.Provider>
  );
}

function TabButton({ id, children }) {
  const { onChange, value } = useContext(TabContext);
  return (
    <Button
      className={a('sui-tab__item').m('sui-tab__item--active', value === id)}
      onClick={() => onChange(id)}
    >
      {children}
    </Button>
  );
}

function TabLink({ children, to }) {
  return (
    <Button
      tag={NavLink}
      to={to}
      activeClassName="sui-tab__item--active"
      className={a('sui-tab__item').toString()}
    >
      {children}
    </Button>
  );
}

Tab.propTypes = {};
Tab.Button = TabButton;
Tab.Link = TabLink;

const css = k`
  .sui-tab {
    border-bottom: solid 1rem var(--#{$root-prefix}-color-border);
    padding-bottom: 8rem;
    
    button.sui-tab__item,
    a.sui-tab__item {
      border: none;
      margin-right: 8rem;
      
      &:hover {
        background-color: var(--#{$root-prefix}-color-tab-button-hover-bg);
      }

      &.sui-tab__item--active {
        background-color: var(--#{$root-prefix}-color-tab-button-active-bg);
      }
    }
  }
`;
