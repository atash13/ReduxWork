const {
  CHANGE_NAME,
  CHANGE_SURNAME,
  CHANGE_EMAIL,
  CHANGE_PHONE_NUMBER,
} = require('../actions/actionTypes');

const initialState = {
  name: '',
  surname: '',
  email: '',
  phoneNumber: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {...state, name: action.payload};

    case CHANGE_SURNAME:
      return {...state, surname: action.payload};

    case CHANGE_EMAIL:
      return {...state, email: action.payload};
    case CHANGE_PHONE_NUMBER:
      return {...state, phoneNumber: action.payload};
  }

  return state;
};

export default userReducer;
