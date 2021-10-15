import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCss, k } from 'kremling';

export function Menu({ components }) {
  const scope = useCss(css);
  const [dark, setDark] = useState(false);

  function onDark() {
    let isDark = !dark;
    setDark(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }

  return (
    <div className="menu" {...scope}>
      <div className="sui-p-32">
        <input type="checkbox" onChange={onDark} checked={dark} />
      </div>
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
    background-color: var(--book-color-menu-bg);
  }
  .nav {
    padding: 0 16rem;
  }
`;
