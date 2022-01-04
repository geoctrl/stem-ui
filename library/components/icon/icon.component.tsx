import React, { ForwardedRef, forwardRef } from 'react'
import { useCss, a } from 'kremling';

import styles from './icon.styles.scss';

type Props = {
  name: string,
  className?: string,
  fill?: string,
  size?: number | string,
  style?: React.StyleHTMLAttributes<any>,
};

export const Icon = forwardRef(function Icon(props: Props, ref: ForwardedRef<any>) {
  const {
    name,
    className,
    fill,
    size = 24,
    style,
    ...rest
  } = props;
  const scope = useCss(styles);
  return (
    <svg
      ref={ref}
      {...scope}
      className={a(`sui-icon ${name}`).a(className)}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        ...(fill ? { fill } : {}),
        ...(style || {}),
      }}
      viewBox="0 0 24 24"
      {...rest}
    >
      <use href={`#${name}`} xlinkHref={`#${name}`} />
    </svg>
  );
});
