import React from 'react';
import userEvent from '@testing-library/user-event';

import { clickEventStack } from '@helpers';

describe('clickEventStack', () => {
  const one = jest.fn();
  const two = jest.fn();
  let oneListener;
  let twoListener;

  test('should fire event', () => {
    oneListener = clickEventStack.add(one)
    userEvent.click(document.body);
    expect(one).toHaveBeenCalledTimes(1);
  });

  test('should only fire once with 2 events', () => {
    twoListener = clickEventStack.add(two);
    userEvent.click(document.body);
    expect(one).toHaveBeenCalledTimes(1);
    expect(two).toHaveBeenCalledTimes(1);
  });

  test('should fire the first event once second event is removed', () => {
    twoListener.remove();
    userEvent.click(document.body);
    expect(one).toHaveBeenCalledTimes(2);
    expect(two).toHaveBeenCalledTimes(1);
  });
});