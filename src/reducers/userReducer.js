const initialState = {
  username: '',
  password: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_USER':
      return { ...state, ...payload };

    case 'SAVE_USER': {
      return payload;
    }

    default:
      return state;
  }
};
