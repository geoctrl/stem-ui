import React from 'react';
import { useCss, k } from 'kremling';

export function ComponentProps({ props }) {
  const scope = useCss(css);
  console.log(props)
  return (
    <div {...scope}>
      {props.map(prop => {
        const Prop = prop.render;
        return <Prop key={prop.name} />
      })}
    </div>
  );
}

ComponentProps.propTypes = {};

const css = k`
  
`;
