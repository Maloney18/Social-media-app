import { useRef } from "react";
import { Section } from "../../features/container";
import { StyledHome } from "./styledHome";
import { profiles } from "../../profile";
import { LeftSideBar, Post, PostField, RightSideBar, Status } from "../../user";

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
        <LeftSideBar />
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
        <RightSideBar />
      </Section>
    </StyledHome>
  );
};

export default Home;
