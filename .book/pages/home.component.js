import React from 'react';
import { useCss, k } from 'kremling';
import { Link } from 'react-router-dom';
import { Code } from '@doc-helpers/code.component';
import { CenterContainer } from 'stem-ui/components';
import { Menu } from '../components/menu.component';

export function Home() {
  const scope = useCss(css);
  return (
    <CenterContainer {...scope}>
      home
      <Link to="/button">button</Link>

      <Code>this.test = 'thing'</Code>
    </CenterContainer>
  );
}

Home.propTypes = {};

const css = k`
  
`;
