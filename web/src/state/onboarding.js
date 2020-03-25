
const initialState = {
  symptomsFirst: null,
  symptomsLast: null,
  name: "",
  location: "",
  age: "",
  driversLicense: false,
};

// CONSTANTS
const SET_NAME = 'SET_NAME';
const SET_AGE = 'SET_AGE';
const SET_LOCATION = 'SET_LOCATION';
const SET_DRIVERS_LICENCE = 'SET_DRIVERS_LICENCE';

// ACTIONS
export const setName = (name) => ({
  type: SET_NAME,
  name
});

export const setLocation = (location) => ({
  type: SET_LOCATION,
  location
});

export const setAge = (age) => ({
  type: SET_AGE,
  age
});

export const setDriversLicense = (hasDriversLicense) => ({
  type: SET_DRIVERS_LICENCE,
  hasDriversLicense
});



// REDUCERS
export default (state = initialState, action:any) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name };

    case SET_LOCATION:
      return { ...state, location: action.location };

    case SET_AGE:
      return { ...state, age: action.age };

    case SET_DRIVERS_LICENCE:
      return { ...state, driversLicense: action.hasDriversLicense };

    default:
      return state;
  }
};
