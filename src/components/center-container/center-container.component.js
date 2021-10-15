import React from 'react';
import { useCss, k, a } from 'kremling';

export function CenterContainer({ children, className, maxWidth }) {
  const scope = useCss(css(maxWidth));
  return (
    <div {...scope} className={a('sui-center-container').a(className)}>
      {children}
    </div>
  );
}

CenterContainer.propTypes = {};

const css = (maxWidth = 2424) => k`
  .sui-center-container {
    width: 100%;
    padding: 0 16rem;
    
    @include bp(xxl) {
      width: getBp(xxl);
      margin: auto;
    }
  }

`;
