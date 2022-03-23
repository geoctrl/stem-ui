import React, { useState } from 'react';
import { useCss, k, a } from 'kremling';

import { Button, Dropdown, Icon, Toggle } from 'stem-ui/components';

declare type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export function Components(props: Props) {
  const { className } = props;

  const [t, setT] = useState(false);
  const scope = useCss(css);
  return (
    <div {...scope} className={a(className).a('temp')}>
      <div>
        <div>button intent</div>
        <Button>Default</Button>
        <Button intent="primary">Primary</Button>
        <Button intent="danger">Danger</Button>
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
      </div>

      <Button iconLeft="book-skull">hey</Button>
      <Button iconRight="chevron-right">hey</Button>

      <Toggle onChange={() => setT(!t)} checked={t} />

      <Dropdown
        renderTrigger={({ toggle }) => (
          <Button intent="primary" onClick={toggle}>
            hey
          </Button>
        )}
        renderContent={() => <div>hey</div>}
      />

      <div className="card card-1">
        <div className="card card-2">
          <div className="card card-3">
            <div className="card card-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

const css = k`
  .temp {
    padding: 32rem;
  }

  .card {
    border: solid 1rem #D3D3D3;
    background-color: white;
    padding: 16px;
  }
`;
