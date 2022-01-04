import { useRef, useEffect } from 'react';

export function usePreviousState(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}