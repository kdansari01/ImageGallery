import React from "react";
import { useDispatch } from "react-redux";
import { loadMoreImages } from "./redux/action";
import "./LoadmoreButton.css";
const LoadMoreButton = () => {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(loadMoreImages());
  };

  return (
    <button
      className="button load-more-button mt-4 mb-5"
      onClick={handleLoadMore}
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
