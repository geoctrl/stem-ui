import * as React from 'react';
import { render } from 'react-dom';
import { keyboardIntent } from 'stem-ui/extras';

import './styles/main.scss';
import { Root } from './root.component';

keyboardIntent.start();

document.documentElement.setAttribute(
  'data-theme',
  localStorage.getItem('dark') ? 'dark' : 'light'
);

render(<Root />, document.querySelector('#app'));
