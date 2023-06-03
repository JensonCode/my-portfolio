export const getStackIcon = (stackName) => {
  const name = stackName.toLowerCase().replace(/[.\s]/g, '-');
  return `/icons/${name}.svg`;
};
