import React from 'react';
import { useCss } from 'kremling';
import { NavButton } from 'stem-ui/components';

import styles from './menu.styles.scss';

export function Menu() {
  const scope = useCss(styles);

  return (
    <div className="menu" {...scope}>
      <div className="nav">
        <NavButton block text="Home" to="/" iconLeft="house" />
        <NavButton block text="Components" to="/components" iconLeft="cube" />
        <NavButton block text="Utilities" to="/components" iconLeft="wrench" />
        <NavButton block text="Styles" to="/components" iconLeft="palette" />
        <NavButton block text="Contribute" to="/components" iconLeft="heart" />
      </div>
    </div>
  );
}
