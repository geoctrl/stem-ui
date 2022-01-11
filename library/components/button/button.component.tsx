import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { useCss, a } from 'kremling';
import { Icon } from '../icon/icon.component';
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
  intent?: 'primary' | 'secondary' | 'flat';
  small?: boolean;
  [btnProp: string]: any;
};

export function Button(props: Props) {
  const {
    as,
    block,
    children,
    className,
    iconLeft,
    iconRight,
    iconOnly,
    intent = 'default',
    small,
    ...btnProps
  } = props;
  const scope = useCss(styles);

  // let content: string | React.ReactNode = text;

  // if (iconOnly) {
  //   content = <Icon size={small ? 20 : 24} name={iconOnly} />;
  // }

  const Tag = as || 'button';

  return (
    <Tag
      {...scope}
      role="button"
      className={a('sui-button')
        .a(className)
        .m('sui-button--block', block)
        .m('sui-button--icon-only', iconOnly)
        .a(`sui-button--${intent}`)
        .m('sui-button--small', small)}
      {...btnProps}
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
}
