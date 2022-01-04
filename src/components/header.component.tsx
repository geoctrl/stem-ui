import React, { useState } from 'react';
import { useCss, a } from 'kremling';
import { Link, NavLink } from 'react-router-dom';
// import { NavButton } from '../library/components/nav-button/nav-button.component';

import styles from './header.styles.scss';

import { Button, CenterContainer } from 'stem-ui/components';

const logo = require('../assets/logo.svg?raw');

export function Header() {
  const scope = useCss(styles);
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
            {/*<NavButton to="/components">Components</NavButton>*/}
            {/*<NavButton to="/utilities">Utilities</NavButton>*/}
            {/*<NavButton to="/styles">Styles</NavButton>*/}
            {/*<NavButton to="/contribute">Contribute</NavButton>*/}
          </div>
        </div>
        <div className="header__actions">
          {/*<Toggle onChange={onDark} checked={dark} />*/}
          actions
        </div>
      </CenterContainer>
    </div>
  );
}
