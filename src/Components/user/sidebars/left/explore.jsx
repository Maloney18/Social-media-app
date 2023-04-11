import { useRef } from "react";
import { StyledExplore } from "./styledExplore";

const Explore = () => {
  const sliderRef = useRef(null);

  const slideFunc = (direction) => {
    const slider = sliderRef?.current;

    if (direction === "left") {
      slider.scrollBy(-200, 0);
    } else {
      slider.scrollBy(200, 0);
    }
  };

  return (
    <StyledExplore>
      <div className="upper-most">
        <h2>explore</h2>
        <span className="see-all">See all</span>
      </div>
      <nav>
        <ul ref={sliderRef}>
          <span onClick={() => slideFunc("left")} className="prev">
            &#10094;
          </span>
          <span onClick={() => slideFunc("right")} className="next">
            &#10095;
          </span>

          <li>jokes</li>
          <li>wise qoutes</li>
          <li>life hacks</li>
          <li>stories</li>
          <li>affections</li>
        </ul>
      </nav>
    </StyledExplore>
  );
};

export default Explore;
