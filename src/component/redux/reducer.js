import { LOAD_MORE_IMAGES } from "./types";

const initialState = {
  images: [],
  page: 1
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MORE_IMAGES:
      return {
        ...state,
        images: state.images.concat(action.payload),
        page: state.page + 1
      };
    default:
      return state;
  }
};

export default imagesReducer;
