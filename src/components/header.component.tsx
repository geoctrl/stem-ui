import React, { useState } from 'react';
import { useCss, a } from 'kremling';
import { Link } from 'react-router-dom';
import styles from './header.styles.scss';

import { NavButton, CenterContainer, Toggle } from 'stem-ui/components';

import logo from '../assets/logo.svg?raw';

export function Header() {
  const scope = useCss(styles);
  const [dark, setDark] = useState(!!localStorage.getItem('dark'));

  function onDark() {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    );
    if (isDark) {
      localStorage.setItem('dark', 'true');
    } else {
      localStorage.setItem('dark', '');
    }
  }

  const isHome = location.pathname === '/';
  return (
    <div className="header" {...scope}>
      <div className={a('header-content').m('header-content--home', isHome)}>
        content
      </div>

      <div>test</div>

      {/*static header*/}
      <CenterContainer className="static-header">
        <div className="static-header-left">
          <Link
            to="/"
            className="logo"
            dangerouslySetInnerHTML={{ __html: logo }}
          />
          <div className="header__links">
            <NavButton to="/components" text="Components" />
            <NavButton to="/utilities" text="Utilities" />
            <NavButton to="/styles" text="Styles" />
            <NavButton to="/contribute" text="Contribute" />
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
