import React, { useState } from 'react';
import { useCss, a } from 'kremling';
import { Link } from 'react-router-dom';

import { Button, Icon, Toggle } from 'stem-ui/components';
import styles from './components.styles.scss';

declare type Props = {
  className?: string;
  style?: React.CSSProperties;
};

function Test({ children, ...props }: any) {
  return <div {...props}>{children}</div>;
}

export function Components(props: Props) {
  const { className } = props;

  const [t, setT] = useState(false);
  const scope = useCss(styles);
  return (
    <div {...scope} className={a(className).a('temp')}>
      <Button intent="primary" as={'a'} href="/sup">
        Primary
      </Button>
      <Button intent="secondary">Secondary</Button>
      <Button intent="flat">Flat</Button>

      <Button block intent="primary">
        Block
      </Button>

      <Button iconLeft={<Icon name="times" />}>hey</Button>

      <Toggle onChange={() => setT(!t)} checked={t} />
    </div>
  );
}
