import * as React from 'react';
import { render } from 'react-dom';
import '../src/extras/keyboard-intent';

import './styles/main.scss';
import { Root } from './root.component';


const cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context('../src', true, /\.doc\.js$/));
const components = Object.values(cache).map(component => {
  const { default: _default, ...rest } = component;
  return { ..._default, ...rest };
})

document.documentElement.setAttribute(
  'data-theme',
  localStorage.getItem('dark') ? 'dark' : 'light'
);

render(<Root components={components} />, document.querySelector('#app'));
