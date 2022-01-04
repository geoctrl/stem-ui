declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg?raw' {
  const content: any;
  export default content;
}
