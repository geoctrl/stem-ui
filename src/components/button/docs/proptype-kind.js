import React from 'react';
import { Button } from 'stem-ui/components';

export default function() {
  return (
    <div className="button-kind">
      <Button kind="default">default</Button>
      <Button kind="primary">primary</Button>
      <Button kind="secondary">secondary</Button>
      <Button kind="danger">danger</Button>
      <Button kind="flat">flat</Button>
    </div>
  );
}
