import * as React from 'react';
import { render } from 'react-dom';
import '../src/extras/keyboard-intent';

import './styles/main.scss';
import { Root } from './root.component';

render(<Root />, document.querySelector('#app'));
