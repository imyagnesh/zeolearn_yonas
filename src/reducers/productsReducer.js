const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_PRODUCTS':
      return payload;

    default:
      return state;
  }
};
