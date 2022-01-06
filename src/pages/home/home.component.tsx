import React from 'react';
import { useCss, k } from 'kremling';
import { Link } from 'react-router-dom';
import { Menu } from '../../components/menu.component';
// import { Code } from '@doc-helpers/code.component';
// import { CenterContainer } from 'stem-ui/components';
// import { Menu } from '../components/menu.component';

import styles from './home.styles.scss';

export function Home() {
  const scope = useCss(styles);
  return (
    <div {...scope}>
      home
      <Link to="/button">button</Link>
      <Menu />
    </div>
  );
}

Home.propTypes = {};
