let initState = {}

export default function componentsList(state = initState, action) {
  switch (action.type) {
    case 'get-components':
      state = Object.assign({}, state, action.payload);
      return state;
    default:
      return state
  }
}