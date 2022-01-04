import React from 'react';
import { Link } from 'react-router-dom';
import { useCss, k } from 'kremling';

export function Menu({ components }) {
  const scope = useCss(css);

  return (
    <div className="menu" {...scope}>
      <div className="nav">
        {components.map((comp) => (
          <div key={comp.name}>
            <Link to={`/components${comp.path}`}>{comp.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

Menu.propTypes = {};

const css = k`
  .menu {
    padding-top: 40rem;
    height: 100%;
    width: 300rem;
    background-color: var(--color-menu-bg);
  }
  .nav {
    padding: 0 16rem;
  }
`;
