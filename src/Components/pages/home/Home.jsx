import { useRef } from "react";
import { Section } from "../../features/container";
import { StyledHome } from "./styledHome";
import { profiles } from "../../profile";
import { Post, PostField, Status } from "../../user";
import Right from "../../user/sidebars/right/right";
import Left from "../../user/sidebars/left/left";

const Home = () => {
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
    <StyledHome>
      <Section>
        <div className="wrapper grid">
          <Left />
        </div>
        <div className="wrapper grid ">
          <div className="item">
            <span onClick={() => slideFunc("left")} className="prev">
              &#10094;
            </span>
            <span onClick={() => slideFunc("right")} className="next">
              &#10095;
            </span>
            <Status sliderRef={sliderRef} profiles={profiles} />
          </div>
          <div className="item">
            <PostField />
          </div>
          <div className="item">
            <Post />
          </div>
        </div>
        <div className="wrapper grid">
          <Right />
        </div>
      </Section>
    </StyledHome>
  );
};

export default Home;
