function categoryReducer(state, action) {
    switch (action.type) {
      case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.categories,
      };
      case "ADD_CATEGORY":
        return {
          ...state,
          categories: [...state.categories, action.category],
        };
  
      case "EDIT_CATEGORY":
        return {
          ...state,
          categories: state.categories.map((category) =>
            category.id === action.category.id ? action.category : category
          ),
        };
  
      case "REMOVE_CATEGORY":
        return {
          ...state,
          categories: state.categories.filter(
            (category) => category.id !== action.id
          ),
        };
  
      default:
        return state;
    }
  };
  export default categoryReducer
  