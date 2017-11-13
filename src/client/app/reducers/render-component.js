let initState = {
  path: '.'
}

export default function renderComponent(state = initState, action) {
  switch (action.type) {
    case 'render-component':
      state = Object.assign({}, state, action.payload);
      return state;
    default:
      return state
  }
}