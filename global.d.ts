declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg?raw' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}
