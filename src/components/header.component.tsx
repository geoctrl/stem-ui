import React, { useState } from 'react';
import { useCss, k, a } from 'kremling';
import { Link } from 'react-router-dom';

import { NavButton, CenterContainer, Toggle } from 'stem-ui/components';

import logo from '../assets/logo-color.svg?raw';

export function Header() {
  const scope = useCss(css);
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
          <Toggle
            onChange={onDark}
            checked={dark}
            size="lg"
            checkedIcon="moon"
            uncheckedIcon="sun"
          />
        </div>
      </CenterContainer>
    </div>
  );
}

const css = k`
  .header {
    position: relative;

  }
  .header-content {
    height: 60rem;
    padding-top: 60rem;
    background-color: var(--color-header-bg);
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

  .header__actions {
    display: flex;
  }

  .logo {
    width: 60rem;
    fill: var(--color-menu-logo);
    flex-grow: 0;
    margin-right: 24rem;
  }
`;
