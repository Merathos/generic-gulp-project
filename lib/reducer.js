export const initialState = {
  search: '',
  filter: [],
  lastUpdate: 0,
  light: false,
  count: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: initialState.count,
      }
    case 'CATALOG_SEARCH':
      return {
        ...state,
        search: action.payload,
      }
    case 'CATALOG_FILTER':
      return {
        ...state,
        filter: [...state.filter, action.payload]
      }
    default:
      return state;
  }
};


