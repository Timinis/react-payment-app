let initialState = [
  { name: 'John' },
  { name: 'Marry' },
  { name: 'Lisa' },
  { name: 'Paul' }
];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
