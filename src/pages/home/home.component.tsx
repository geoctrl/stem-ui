import React from 'react';
import { useCss, k } from 'kremling';
import { Link } from 'react-router-dom';
import { Menu } from '../../components/menu.component';
// import { Code } from '@doc-helpers/code.component';
// import { CenterContainer } from 'stem-ui/components';
// import { Menu } from '../components/menu.component';

export function Home() {
  const scope = useCss(css);
  return (
    <div {...scope}>
      home
      <Link to="/button">button</Link>
      <Menu />
    </div>
  );
}

const css = k``;
