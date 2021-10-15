import { useEffect } from 'react';
// import { clickEventStack } from '@helpers';

export function useClickEventStack(callback) {
  useEffect(() => {
    // const listener = clickEventStack.add(callback);
    // return () => listener.remove();
  }, []);
}
