export const createRule = rule => stylesheet => {
  stylesheet.sheet.insertRule(rule);
};
