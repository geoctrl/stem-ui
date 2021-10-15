import React from 'react';
import { useCss, k } from 'kremling';

export function Toggle({ onChange, checked }) {
  const scope = useCss(css);
  function doIt(thing) {
    onChange(thing);
  }
  return (
    <div {...scope} className="sui-toggle">
      <input type="checkbox" onChange={doIt} checked={checked} />
    </div>
  );
}

Toggle.propTypes = {};

const css = k`
  .sui-toggle {
    
  }
`;
