import React, {
  ForwardedRef,
  forwardRef,
  FunctionComponent,
  ReactNode,
} from 'react';
import { useCss, a } from 'kremling';
import styles from './button.styles.scss';

type Props = {
  as?: FunctionComponent<any> | string;
  block?: boolean;
  children?: ReactNode;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconOnly?: ReactNode;
  link?: boolean;
  intent?: 'default' | 'primary' | 'flat' | 'danger';
  outline?: boolean;
  onClick?: () => Event;
  size?: 'sm' | 'md' | 'lg';
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
  const scope = useCss(styles);
  const Tag = as || 'button';

  return (
    <Tag
      {...scope}
      role="button"
      className={a('sui-button')
        .a(className)
        .m('--block', block)
        .m('--icon-only', iconOnly)
        .m('--outline', outline)
        .a(`--${intent}`)
        .a(`--${size}`)}
      onClick={onClick}
      {...btnProps}
      ref={ref}
    >
      {iconLeft || iconRight ? (
        <>
          {iconLeft}
          <span>{children}</span>
          {iconRight}
        </>
      ) : (
        children
      )}
    </Tag>
  );
});
