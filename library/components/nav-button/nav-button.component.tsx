import React from 'react';
import { useCss, a } from 'kremling';
import { NavLink } from 'react-router-dom';

import styles from './nav-button.styles.scss';

type Props = {
  text: string,
  to: string,
};

export function NavButton(props: Props) {
  const { text, to } = props;
  const scope = useCss(styles);
  return (
    <NavLink
      {...scope}
      to={to}
      className={({ isActive }) => a(`sui-nav-button`).m('sui-nav-button--active', isActive)}
    >
      {text}
    </NavLink>
  );
}

NavButton.propTypes = {};
