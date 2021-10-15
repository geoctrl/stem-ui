import React, { forwardRef } from 'react'
import { useCss, k, a } from 'kremling';

export const Icon = forwardRef(function Icon(props, ref) {
  const {
    name,
    className,
    fill,
    size = 24,
    style,
    ...rest
  } = props;
  const scope = useCss(css);
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

const css = k`
  .sui-icon {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    width: 24rem;
    height: 24rem;
  }
`;
