import { useRef } from "react";
import { Section } from "../../features/container";
import { StyledLdnPage } from "./styledLandingPage";

const LandingPage = () => {
  const menuOne = useRef(null);
  const hamburger = useRef(null);
  const toggleMenu = () => {
    const menuBar = menuOne?.current;
    const burger = hamburger?.current;
    menuBar.classList.toggle("open");
    burger.classList.toggle("hamburger");
  };
  return (
    <>
      <StyledLdnPage>
        <Section></Section>
      </StyledLdnPage>
    </>
  );
};

export default LandingPage;
