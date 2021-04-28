const Logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('this is actiona', action);
  const result = next(action);
  console.log('this is state', store.getState());
  console.groupEnd();
  return result;
};
export default Logger;
