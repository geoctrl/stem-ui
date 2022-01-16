import React, { useState } from 'react';
import { useCss, a } from 'kremling';

import { Button, Dropdown, Icon, Toggle } from 'stem-ui/components';
import styles from './components.styles.scss';

declare type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export function Components(props: Props) {
  const { className } = props;

  const [t, setT] = useState(false);
  const scope = useCss(styles);
  return (
    <div {...scope} className={a(className).a('temp')}>
      <div>
        <div>button intent</div>
        <Button>Default</Button>
        <Button intent="primary">Primary</Button>
        <Button intent="danger">Danger</Button>
      </div>

      <div>
        <div>button outline</div>
        <Button outline>Default</Button>
        <Button outline intent="primary">
          Primary
        </Button>
        <Button outline intent="danger">
          Danger
        </Button>
      </div>

      <div>
        <div>button as</div>
        <Button as="a" href="/sup">
          Go to
        </Button>
      </div>

      <div>
        <div>button block</div>
        <Button block>Block</Button>
      </div>

      <div>
        <div>button sizes</div>
        <Button size="sm">small</Button>
        <Button size="md">medium</Button>
        <Button size="lg">large</Button>
      </div>

      <Button iconLeft={<Icon name="times" />}>hey</Button>

      <Toggle onChange={() => setT(!t)} checked={t} />

      <Dropdown
        renderTrigger={({ toggle }) => (
          <Button intent="primary" onClick={toggle}>
            hey
          </Button>
        )}
        renderContent={() => <div>hey</div>}
      />
    </div>
  );
}
