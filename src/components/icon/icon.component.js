import React, { forwardRef } from 'react'
import { string, object} from 'prop-types';
import { useCss, k, a } from 'kremling';


export const Icon = forwardRef(function Icon({ name, className, fill, style, ...rest }, ref) {
  const scope = useCss(css);
  const size = 24;
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

Icon.propTypes = {
  name: string,
  fill: string,
  style: object,
};

const css = k`
  .sui-icon {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    width: 24rem;
    height: 24rem;
  }
`;
