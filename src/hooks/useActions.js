export default (state, dispatch, fNs) => {
  const keys = Object.keys(fNs);
  for (let i = 0; i < keys.length; i++) {
    fNs[keys[i]] = fNs[keys[i]](state, dispatch);
  }
  return fNs;
};
