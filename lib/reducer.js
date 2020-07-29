export const initialState = {
  search: '',
  filter: [],
  lastUpdate: 0,
  light: false,
  count: 0,
  internship: false,
  english: false
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
    case 'CLEAR_ALL_FILTERS':
      return {
        ...state,
        filter: [],
        internship: false,
        english: false
      }
    case 'CATALOG_INTERNSHIP':
      return {
        ...state,
        internship: true
      }
    case 'CATALOG_ENGLISH':
      return {
        ...state,
        english: true
      }
    case 'CLEAR_FILTER':
      let item = state.filter.find(item => item === action.payload);
      const index = state.filter.indexOf(item);
      return {
        ...state,
        filter: [ ...state.filter.slice(0, index), ...state.filter.slice(index +1) ]
      }
    default:
      return state;
  }
};


