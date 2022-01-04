export function buildComponentProperties(componentPath) {
  return {
    component: require(componentPath).default,
    raw: require(`${componentPath}?raw`),
  };
}
