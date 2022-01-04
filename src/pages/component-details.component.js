import React from 'react';
import { useCss, k } from 'kremling';

export function ComponentDetails({ props }) {
  const scope = useCss(css);
  return (
    <div {...scope}>
      {props.map(prop => {
        const Prop = prop.render;
        return <Prop key={prop.name} />
      })}
    </div>
  );
}

ComponentDetails.propTypes = {};

const css = k`
  
`;
