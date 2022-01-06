import React from 'react';
import { useCss, a } from 'kremling';
import { NavLink } from 'react-router-dom';

import styles from './nav-button.styles.scss';
import { Icon } from 'stem-ui/components';

type Props = {
  block?: boolean;
  className?: string;
  iconLeft?: string;
  text: string;
  to: string;
};

export function NavButton(props: Props) {
  const { block, className, iconLeft, text, to, ...rest } = props;
  const scope = useCss(styles);
  return (
    <NavLink
      {...scope}
      to={to}
      className={({ isActive }) =>
        a(className).a('sui-nav-button').m('active', isActive).m('block', block)
      }
      {...rest}
    >
      {iconLeft && <Icon className="icon-left" name={iconLeft} size={16} />}
      {text}
    </NavLink>
  );
}
