import { v4 as uuid } from 'uuid';

class ClickEventStack {
  #subscribers = [];

  constructor() {
    window.addEventListener('click', this.#next, true);
  }

  #next = (e) => {
    if (this.#subscribers.length) {
      const { callback } = this.#subscribers[this.#subscribers.length - 1];
      callback(e);
    }
  }

  add = (callback) => {
    const id = uuid();
    this.#subscribers.push({ id, callback })
    return {
      remove: () => {
        this.#subscribers = this.#subscribers.filter(s => s.id !== id);
      }
    };
  }
}

export const clickEventStack = new ClickEventStack();