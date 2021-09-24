import React from 'react';
import { useCss, k, a } from 'kremling';
import { oneOf } from 'prop-types';
import { Icon } from '@components/icon/icon.component';

export function Button(props) {
  const {
    block,
    kind = 'default',
    children,
    className,
    iconLeft,
    iconRight,
    iconOnly,
    ...btnProps
  } = props;
  const scope = useCss(css);

  let content = children;

  if (iconOnly) {
    content = <Icon name={iconOnly} />
  }

  return (
    <button
      {...scope}
      {...btnProps}
      className={
        a('sui-button')
          .a(`sui-button--${kind}`, className)
          .m('sui-button--block', block)
          .m('sui-button--icon-only', iconOnly)
      }
      role="button"
    >
      {content}
    </button>
  );
}


Button.propTypes = {
  kind: oneOf(['default', 'primary', 'secondary', 'important', 'danger', 'flat']),
};

const css = k`
  .sui-button {
    font-family: inherit;
    font-weight: 600;
    background-color: inherit;
    border: 0;
    border-radius: 6rem;
    height: var(--sui-form-height);
    padding: 0 16rem;
    font-size: inherit;
    line-height: 1;
    transition: box-shadow var(--sui-form-transition-duration) ease,
      background-color var(--sui-form-transition-duration) ease,
      color var(--sui-form-transition-duration) ease,
      transform 100ms ease;
    transform: scale(1);
    -webkit-font-smoothing: antialiased;
    
    &:focus {
      outline: none;
      box-shadow: var(--sui-form-focus-state);
    }
    
    &:active {
      transform: scale(.94);
    }
    
    &.sui-button--icon-only {
      height: var(--sui-form-height);
      width: var(--sui-form-height);
      padding: 0;
    }
    
    // DEFAULT
    &.sui-button--default {
      border: solid 1rem var(--sui-color-button-default-border);
      color: var(--sui-color-button-default-text);
      
      &:hover {
        background-color: rgba(var(--sui-color-app-primary-rgb), .14);
      }
      
      &:focus {
        border-color: var(--sui-color-button-default-focus-border);
      }
    }
    
    // PRIMARY
    &.sui-button--primary {
      background-color: var(--sui-color-button-primary-bg);
      color: var(--sui-color-button-primary-text);

      &:hover {
        background-color: var(--sui-color-button-primary-hover-bg);
      }

      &:focus {
        box-shadow: var(--sui-form-focus-state);
      }
      
      &:active {
      }
    }
    
    // SECONDARY
    &.sui-button--secondary {
      background-color: var(--sui-color-button-secondary-bg);
      color: var(--sui-color-button-secondary-text);
      
      &:hover {
        background-color: var(--sui-color-button-secondary-hover-bg);
      }
    }
    
    // DANGER
    &.sui-button--danger {
      background-color: var(--sui-color-button-danger-bg);
      color: var(--sui-color-button-danger-text);
    }
    
    // FLAT
    &.sui-button--flat {
      color: var(--sui-color-button-flat-text);
      
      &:hover {
        background-color: rgba(var(--sui-color-app-primary-rgb),.14);
      }
    }
    
    &.sui-button--block {
      display: block;
      width: 100%;
    }
  }
`;
