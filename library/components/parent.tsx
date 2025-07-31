import React from 'react';
import { useCss, k } from 'kremling';

const parentCss = k`
  .generic {
    color: red;
  }
`;

const childCss = k`
  .generic {
    font-size: 24px;
  }
`;

export function Parent() {
  const scope = useCss(parentCss);
  return (
    <div {...scope}>
      <div className="generic">parent stuff</div>
      <Child />
    </div>
  );
}

export function Child() {
  const scope = useCss(childCss);
  return (
    <div {...scope} className="generic">
      child stuff
    </div>
  );
}
