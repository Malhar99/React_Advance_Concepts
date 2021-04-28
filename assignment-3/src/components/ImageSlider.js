import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import useSlideshow from "../useSlideshow";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
const ImageSlider = ({ slides }) => {
  const { currIndex, isPlaying, setIsPlaying, updateSlide } = useSlideshow(
    slides
  );

  const listIndicators = slides.map((item, index) => (
    <li
      key={index}
      className={currIndex === index ? "active" : ""}
      onClick={() => updateSlide(index)}
    >
      {index + 1}
    </li>
  ));

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={updateSlide} />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={() => updateSlide("next")}
        />
        {slides.map((slide, index) => {
          return (
            <div
              className={index === currIndex ? "slide active" : "slide"}
              key={index}
            >
              {index === currIndex && (
                <img src={slide.image} alt="travel images" className="image" />
              )}
            </div>
          );
        })}
      </section>
      <ul className="indicators">{listIndicators}</ul>
      {isPlaying ? (
        <BsFillPauseFill
          className="play_pause_button"
          onClick={() => setIsPlaying(false)}
        />
      ) : (
        <BsFillPlayFill
          className="play_pause_button"
          onClick={() => setIsPlaying(true)}
        />
      )}
    </div>
  );
};

export default ImageSlider;
