import React from 'react';
import { useCss, k } from 'kremling';
import { NavButton } from 'stem-ui/components';

export function Menu() {
  const scope = useCss(css);

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

const css = k`
  @import "variables";
  @import "color-helpers";
  
  @include generateThemeVariables((
    menu-bg: (light: $primary-shade-500, dark: $primary-600),
  ));

  .menu {
    padding-top: 40rem;
    height: 100%;
    width: 300rem;
    background-color: var(--color-menu-bg);
  }

  [data-test="something"] {
    background-color: red;
  }

  .nav {
    padding: 0 16rem;

    > * {
      margin-bottom: 8rem;
    }
  }
`;
