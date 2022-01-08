import { Key } from 'react';

function keyboardIntentClick(): void {
  if (document.body.classList.contains('keyboard-intent')) {
    document.body.classList.remove('keyboard-intent');
  }
}

function keyboardIntentKeydown(): void {
  if (!document.body.classList.contains('keyboard-intent')) {
    document.body.classList.add('keyboard-intent');
  }
}

export interface KeyboardIntent {
  start: () => void;
  stop: () => void;
}

export const keyboardIntent: KeyboardIntent = {
  start(): void {
    document.addEventListener('click', keyboardIntentClick);
    document.addEventListener('keydown', keyboardIntentKeydown);
  },
  stop(): void {
    document.removeEventListener('click', keyboardIntentClick);
    document.removeEventListener('keydown', keyboardIntentKeydown);
  },
};
