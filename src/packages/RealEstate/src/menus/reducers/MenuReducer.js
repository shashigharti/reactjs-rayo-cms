const MenuReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state.all, action.menu];
    case 'SET_FIELD':
      return {
        ...state,
        current_page: {
          ...state.current_page,
          [action.current_page.field]: action.current_page.value,
        },
      };
    case 'INIT':
      return action.default;
    case 'RESET':
      return [];
    case 'DELETE':
      return state;
    default:
      return state;
  }
};

export { MenuReducer };
