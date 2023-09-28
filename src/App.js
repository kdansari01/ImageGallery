import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMoreImages } from "./component/redux/action";
import ImageCard from "./component/ImageCard";
import LoadMoreButton from "./component/LoadMore";
import { Navbar } from "./component/Navbar";
import Hero from "./component/HeroSection";

const App = () => {
  const images = useSelector((state) => state.images.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMoreImages());
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <div>
        <Hero />
      </div>
      <div className="image-container col-12 row ">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default App;
