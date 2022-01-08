import * as React from 'react';
import { useCss, a } from 'kremling';
import { Icon } from '../icon/icon.component';
import styles from './button.styles.scss';

type Props = {
  anchor?: boolean;
  block?: boolean;
  kind?: string;
  className?: string;
  iconLeft?: string;
  iconRight?: string;
  iconOnly?: string;
  small?: boolean;
  text: string;
  [btnProp: string]: any;
};

export function Button(props: Props) {
  const {
    anchor,
    block,
    kind = 'default',
    className,
    iconLeft,
    iconRight,
    iconOnly,
    small,
    text,
    ...btnProps
  } = props;
  const scope = useCss(styles);

  let content: string | React.ReactNode = text;

  if (iconOnly) {
    content = <Icon size={small ? 20 : 24} name={iconOnly} />;
  }

  const Tag = anchor ? 'a' : 'button';

  return (
    <Tag
      {...scope}
      role="button"
      className={a('sui-button')
        .a(className)
        .a(`sui-button--${kind}`)
        .m('sui-button--block', block)
        .m('sui-button--icon-only', iconOnly)
        .m('sui-button--small', small)}
      {...btnProps}
    >
      {content}
    </Tag>
  );
}
