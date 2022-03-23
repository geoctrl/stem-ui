import React, {
  ForwardedRef,
  forwardRef,
  FunctionComponent,
  ReactNode,
} from 'react';
import { useCss, k, a } from 'kremling';
import { Icon } from '../icon/icon.component';

type Props = {
  as?: FunctionComponent<any> | string;
  block?: boolean;
  children?: ReactNode;
  className?: string;
  iconLeft?: string;
  iconRight?: string;
  iconOnly?: string;
  link?: boolean;
  intent?: 'default' | 'primary' | 'flat' | 'danger';
  outline?: boolean;
  onClick?: () => Event;
  size?: 'sm' | 'md';
  [btnProp: string]: any;
};

export const Button = forwardRef(function Button(
  props: Props,
  ref: ForwardedRef<any>
) {
  const {
    as,
    block,
    children,
    className,
    iconLeft,
    iconRight,
    iconOnly,
    intent = 'default',
    onClick,
    outline = false,
    size = 'md',
    ...btnProps
  } = props;
  const scope = useCss(css);
  const Tag = as || 'button';

  return (
    <Tag
      {...scope}
      role="button"
      className={a('button')
        .a(className)
        .m('--block', block)
        .m('--icon-only', iconOnly)
        .m('--icon-left', iconLeft)
        .m('--icon-right', iconRight)
        .a(`--${intent}`)
        .a(`--${size}`)}
      onClick={onClick}
      {...btnProps}
      ref={ref}
    >
      {iconLeft || iconRight ? (
        <>
          {iconLeft && <Icon name={iconLeft} size="18" />}
          <span>{children}</span>
          {iconRight && <Icon name={iconRight} size="18" />}
        </>
      ) : (
        children
      )}
    </Tag>
  );
});

const css = k`
  @include generateThemeVariables((
    button-default-bg: (light: rgba($dark-900, .1), dark: rgba($light-900, .1)),
    button-default-color: (light: $dark-900, dark: $light-900),
    button-default-bg-hover: (light: rgba($dark-900, .15), dark: rgba($light-900, .15)),
    button-default-bg-active: (light: rgba($dark-900, .2), dark: rgba($light-900, .2)),
    
    button-primary-bg: $primary,
    button-primary-color: $light-900,
    button-primary-bg-hover: $primary-600,
    button-primary-bg-active: $primary-700,
    
    button-danger-bg: (light: rgba($danger, .1), dark: rgba($light-900, .1)),
    button-danger-color: (light: $danger, dark: $danger),
    button-danger-bg-hover: (light: rgba($danger, .15), dark: rgba($danger, .2)),
    button-danger-bg-active: (light: rgba($danger, .2), dark: rgba($danger, .3)),
  ));
  
  .button {
    color: var(--app-text);
    font-family: inherit;
    font-weight: 600;
    background-color: inherit;
    border: 0;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    transition: box-shadow var(--form-transition-duration) ease,
      background-color var(--form-transition-duration) ease,
      color var(--form-transition-duration) ease;
    -webkit-font-smoothing: antialiased;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      outline: none;
      box-shadow: var(--form-focus-state);
    }

    // icons
    // ---------------------------
    &.--icon-only {
      height: var(--form-height-md);
      width: var(--form-height-md);
      padding: 0;
      align-items: center;
      justify-content: center;
    }

    // BLOCK
    // ---------------------------
    &.--block {
      display: block;
      width: 100%;
    }

    // sizes
    // ---------------------------
    &.--sm {
      height: var(--form-height-sm);
      line-height: var(--form-height-sm);
      padding: 0 var(--form-padding-sm);
      font-size: var(--form-text-sm);
      border-radius: var(--border-radius-sm);

      &.--icon-left {
        padding-left: 4rem;
      }
    }

    &.--md {
      height: var(--form-height-md);
      line-height: var(--form-height-md);
      padding: 0 var(--form-padding-md);
      font-size: var(--form-text-md);
      border-radius: var(--border-radius-md);

      &.--icon-left {
        padding-left: 12rem;
        
        > span {
          margin-left: 8rem;
        }
      }
    }


    // DEFAULT
    // ---------------------------
    &.--default {
      background-color: var(--button-default-bg);
      color: var(--button-default-color);

      &:hover {
        background-color: var(--button-default-bg-hover);
      }
      
      &:active {
        background-color: var(--button-default-bg-active);
      }

      &:focus {
      }
    }

    // PRIMARY
    // ---------------------------
    &.--primary {
      background-color: var(--button-primary-bg);
      color: var(--button-primary-color);

      &:hover {
        background-color: var(--button-primary-bg-hover);
      }

      &:active {
        background-color: var(--button-primary-bg-active);
      }
      &:focus {
        
      }
    }

    // DANGER
    // ---------------------------
    &.--danger {
      background-color: var(--button-danger-bg);
      color: var(--button-danger-color);

      &:hover {
        background-color: var(--button-danger-bg-hover);
      }

      &:active {
        background-color: var(--button-danger-bg-active);
      }
    }


  }
`;
