import actions from '../actions/searchingGifs';
const initialState = {
  data: [],
  isLoading: false,
  error: null
};

const searchingGifsReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case actions.types.SEARCH_GIFS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case actions.types.SEARCH_GIFS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        data: [...payload],
      };

    case actions.types.SEARCH_GIFS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: {...payload}
      };

    default:
      return state;
  }
};

export default searchingGifsReducer;