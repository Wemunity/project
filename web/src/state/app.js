
const initialState = {

};

// CONSTANTS
const DO_SOMETHING = 'DO_SOMETHING';

// ACTIONS
export const doSomething = (someVar) => ({
  type: DO_SOMETHING,
  someVar
});



// REDUCERS
export default (state = initialState, action:any) => {
  switch (action.type) {
    case DO_SOMETHING:
      return { ...state, somevar: action.someVar };

    default:
      return state;
  }
};
