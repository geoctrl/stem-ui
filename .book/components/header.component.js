import React from 'react';
import { useCss, k } from 'kremling';

import logo from '../assets/logo.svg?raw';

export function Header() {
  const scope = useCss(css);
  return (
    <div {...scope} className="header">
      <div className="logo" dangerouslySetInnerHTML={{ __html: logo }} />
    </div>
  );
}

Header.propTypes = {};

const css = k`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60rem;
    background-color: var(--book-color-header-bg);
  }
  .logo {
    width: 100rem;
    fill: var(--book-color-menu-logo);
    margin: 0 16rem;
    padding-bottom: 40rem;
  }
`;
