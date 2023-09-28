import axios from "axios";
import { LOAD_MORE_IMAGES } from "./types";

export const loadMoreImages = () => {
  return async (dispatch, getState) => {
    const { page } = getState().images;
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page + 1}&limit=10`
      );
      dispatch({
        type: LOAD_MORE_IMAGES,
        payload: response.data
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
};
