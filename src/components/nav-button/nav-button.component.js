import React from 'react';
import { useCss, k } from 'kremling';
import { NavLink } from 'react-router-dom';

export function NavButton({ children, to }) {
  const scope = useCss(css);
  return (
    <NavLink
      {...scope}
      to={to}
      className="sui-nav-button"
      activeClassName="sui-nav-button--active"
    >
      {children}
    </NavLink>
  );
}

NavButton.propTypes = {};

const css = k`
  .sui-nav-button {
    color: var(--book-color-header-links-text);
    font-weight: 500;
    height: 28rem;
    border-radius: var(--sui-form-border-radius);
    padding: 0 8rem;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-size: 14rem;
    line-height: var(--sui-form-height);
    border: solid 2rem transparent;
    transition: box-shadow var(--sui-form-transition-duration) ease,
      border var(--sui-form-transition-duration) ease,
      background-color var(--sui-form-transition-duration) ease,
      color var(--sui-form-transition-duration) ease,
      transform 100ms ease;

    &:focus {
      outline: none;
      box-shadow: var(--sui-form-focus-state);
    }

    &:active {
      transform: scale(.94);
    }

    &:hover {
      background-color: rgba(#000, .1);
      text-decoration: none;
    }
    
    &.sui-nav-button--active {
      background-color: rgba(#000, .1);
    }

  }
`;
