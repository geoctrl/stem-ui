import React from 'react';
import { useCss, k } from 'kremling';

export function ComponentDetails() {
  const scope = useCss(css);
  return (
    <div {...scope}>
      component details
    </div>
  );
}

ComponentDetails.propTypes = {};

const css = k`
  
`;
