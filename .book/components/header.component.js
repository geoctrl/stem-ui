import * as React from 'react';
import { useCss, k, a } from 'kremling';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { CenterContainer, Toggle } from 'stem-ui/components';
import { NavButton } from '../../src/components/nav-button/nav-button.component';
import { useState } from 'react';

const logo = require('../assets/logo.svg?raw');

function _Header({ location }) {
  const scope = useCss(css);
  const [dark, setDark] = useState(!!localStorage.getItem('dark'));

  function onDark() {
    let isDark = !dark;
    setDark(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (isDark) {
      localStorage.setItem('dark', 'true');
    } else {
      localStorage.setItem('dark', '');
    }
  }

  const isHome = location.pathname === '/';
  return (
    <div className="header" {...scope}>
      {/*header content on home page*/}
      <div className={a('header-content').m('header-content--home', isHome)}>
        content
      </div>

      {/*static header*/}
      <CenterContainer className="static-header">
        <div className="static-header-left">
          <Link to="/" className="logo" dangerouslySetInnerHTML={{ __html: logo }} />
          <div className="header__links">
            <NavButton to="/components">Components</NavButton>
            <NavButton to="/utilities">Utilities</NavButton>
            <NavButton to="/styles">Styles</NavButton>
            <NavButton to="/contribute">Contribute</NavButton>
          </div>
        </div>
        <div className="header__actions">
          <Toggle onChange={onDark} checked={dark} />
          actions
        </div>
      </CenterContainer>
    </div>
  );
}

_Header.propTypes = {};

export const Header = withRouter(_Header);

const css = k`
  .header {
    position: relative;
    
  }
  .header-content {
    height: 60rem;
    padding-top: 60rem;
    background-color: var(--book-color-header-bg);
    transition: height 400ms ease;
    overflow: hidden;
  }
  
  .header-content--home {
    height: 400rem;
  }
  
  .static-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .static-header-left {
    display: flex;
    align-items: center;
  }
  
  .header__links a {
    margin: 0 4rem;
  }
  
  .logo {
    width: 140rem;
    fill: var(--book-color-menu-logo);
    margin-top: -4rem;
    flex-grow: 0;
    margin-right: 24rem;
  }
`;
