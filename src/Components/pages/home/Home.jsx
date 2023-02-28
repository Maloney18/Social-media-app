import { useRef } from "react";
import { Section } from "../../features/container";
import { StyledHome } from "./styledHome";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { VscReactions } from "react-icons/vsc";
import { SlLike } from "react-icons/sl";
import Status from "../../user/status/Status";
import { profiles } from "../../profile";

const Home = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // const prev = () => {
  //   const index = currentSlide > 0 ? currentSlide - 1 : 0;
  //   setCurrentSlide(index);
  // };

  // const next = () => {
  //   const index =
  //     currentSlide < profiles?.length - 1
  //       ? currentSlide + 1
  //       : profiles?.length - 1;

  //   setCurrentSlide(index);
  // };

  const slideFunc = (direction) => {
    // const slider = sliderRef.current.children[0];
    const slider = document?.querySelectorAll(".inner-wrapper")[0];

    if (direction === "left") {
      slider.scrollBy(-200, 0);
    } else {
      slider.scrollBy(200, 0);
    }
  };

  return (
    <StyledHome>
      <Section>
        <div className="grid">
          <div className="wrapper grid">
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="wrapper grid">
            <div className="item">
              <span
                // style={{
                //   display: currentSlide === 0 ? "none" : "flex",
                // }}
                // onClick={prev}
                onClick={() => slideFunc("left")}
                className="prev"
              >
                &#10094;
              </span>
              <span
                /* style={{
                  display:
                    currentSlide === profiles?.length - 1 ? "none" : "flex",
                }} */
                // onClick={next}
                onClick={() => slideFunc("right")}
                className="next"
              >
                &#10095;
              </span>
              <div ref={sliderRef} className="inner-wrapper">
                <Status profiles={profiles} />
              </div>
            </div>
            <div className="item">
              <div className="profile">
                <div className="combine">
                  <div className="img_wrapper">
                    <img src="Images/profile-pic.png" alt="" />
                  </div>
                  <div className="input_cont">
                    <input
                      type="text"
                      name=""
                      placeholder="Let out your mind"
                    />
                  </div>
                </div>
                <div className="actions_cont">
                  <div className="icons_cont">
                    <div className="icon_wrapper">
                      <BsCameraVideo className="icon" />
                      <span className="desc">live</span>
                    </div>
                    <div className="icon_wrapper">
                      <MdOutlineInsertPhoto className="icon" />
                      <span className="desc">photo</span>
                    </div>
                    <div className="icon_wrapper">
                      <VscReactions className="icon" />

                      <span className="desc">feeling</span>
                    </div>
                  </div>
                  <button className="btn">post</button>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="profile">
                <div className="img_wrapper">
                  <img src="Images/profile-pic.png" alt="" />
                </div>
                <div className="text tac">
                  <p>username</p>
                  <p>location</p>
                </div>
                <BsThreeDots className="icon" />
              </div>
              <div className="post">
                <div className="img-wrapper">
                  <img src="Images/facts.jpg" alt="facts" />
                </div>
                <div className="icons_wrapper">
                  <div className="left-icons">
                    <SlLike className="icon" />
                    <FaRegComment className="icon" />
                    <BiShareAlt className="icon" />
                  </div>
                  <div className="right_icons">
                    <BsBookmark className="icon" />
                  </div>
                </div>
                <div className="engagements">
                  <div className="items_wrapper">
                    <div className="img_cont">
                      <div className="img-wrapper">
                        <img src="Images/elon-musk.jpg" alt="avater" />
                      </div>
                      <div className="img-wrapper">
                        <img src="Images/profile-2.jpg" alt="avater" />
                      </div>
                      <div className="img-wrapper">
                        <img src="Images/profile-3.jpg" alt="avater" />
                      </div>
                    </div>
                    <div className="text_cont">
                      <span>
                        Liked by <span className="bold">Big Fame</span> and{" "}
                        <span className="bold">1,993 others</span>
                      </span>
                    </div>
                  </div>
                  <p>
                    We know the voices in our heads aren't real, but sometimes
                    their ideas are just too good to ignore.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper grid">
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
      </Section>
    </StyledHome>
  );
};

export default Home;
