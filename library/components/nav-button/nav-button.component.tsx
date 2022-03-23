import React from 'react';
import { useCss, k, a } from 'kremling';
import { NavLink } from 'react-router-dom';

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
  const scope = useCss(css);
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

const css = k`
  .sui-nav-button {
    color: var(--book-color-header-links-text);
    font-weight: 500;
    border-radius: var(--form-border-radius);
    padding: 0 12rem;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-size: 14rem;
    height: var(--form-height-md);
    line-height: 1;
    border: solid 2rem transparent;
    transition: box-shadow var(--form-transition-duration) ease,
    border var(--form-transition-duration) ease,
    background-color var(--form-transition-duration) ease,
    color var(--form-transition-duration) ease,
    transform 100ms ease;

    &.block {
      width: 100%;
      display: flex;
    }

    .icon-left {
      margin-right: 8rem;
    }


    &:focus {
      outline: none;
      box-shadow: var(--form-focus-state);
    }

    &:active {
      transform: scale(.94);
    }

    &:hover {
      background-color: rgba(#000, .1);
      text-decoration: none;
    }

    &.active {
      background-color: rgba(#000, .1);
    }
  }
`;
