import * as React from 'react';
import { useCss, k, a } from 'kremling';
import { Icon } from '../icon/icon.component';
import { bool, oneOf } from 'prop-types';

export function Button(props) {
  const {
    block,
    kind = 'default',
    children,
    className,
    iconLeft,
    iconRight,
    iconOnly,
    small,
    tag: Tag = 'button',
    ...btnProps
  } = props;
  const scope = useCss(css);

  let content = children;

  if (iconOnly) {
    content = <Icon size={small ? 20 : 24} name={iconOnly} />
  }

  return (
    <Tag
      {...scope}
      role="button"
      className={
        a('sui-button')
          .a(`sui-button--${kind}`)
          .a(className)
          .m('sui-button--block', block)
          .m('sui-button--icon-only', iconOnly)
          .m('sui-button--small', small)
          .toString()
      }
      {...btnProps}
    >
      {content}
    </Tag>
  );
}

Button.propTypes = {
  block: bool,
  kind: oneOf(['default', 'primary', 'secondary', 'danger', 'flat']),
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
    line-height: var(--sui-form-height);
    text-decoration: none;
    display: inline-flex;
    transition: box-shadow var(--sui-form-transition-duration) ease,
      background-color var(--sui-form-transition-duration) ease,
      color var(--sui-form-transition-duration) ease,
      transform 100ms ease;
    transform: scale(1);
    -webkit-font-smoothing: antialiased;
    
    &:hover {
      text-decoration: none;
    }
    
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
      align-items: center;
      justify-content: center;
    }
    
    // DEFAULT
    &.sui-button--default {
      border: solid 1rem var(--sui-color-button-default-border);
      color: var(--sui-color-button-default-text);
      
      &:hover {
        background-color: var(--sui-color-button-default-bg);
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
        background-color: var(--sui-color-button-flat-hover-bg);
      }
    }
    
    &.sui-button--block {
      display: block;
      width: 100%;
    }
    
    &.sui-button--small {
      height: var(--sui-form-height-sm);
      padding: 0 8rem;
      
      &.sui-button--icon-only {
        width: var(--sui-form-height-sm);
        padding: 0;
      }
    }
  }
`;
