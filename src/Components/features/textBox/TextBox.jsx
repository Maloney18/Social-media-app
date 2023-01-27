import React from "react";
import { HashLink } from "react-router-hash-link";

const TextBox = ({
  heading1,
  heading2,
  heading3,
  texts,
  button,
  alignPText = "left",
  display = "block",
  to,
  scroll,
  href,
}) => {
  const scrollToPage = (page) => {
    window.scrollTo({
      top: page.current.offsetTop,
    });
  };

  return (
    <div className="textBox df fdirc">
      <h1>{heading1}</h1>
      <h2>{heading2}</h2>
      <h3>{heading3}</h3>
      <p style={{ textAlign: alignPText }}>{texts}</p>
      <button
        onClick={scroll ? () => scrollToPage(scroll) : null}
        style={{ display: display }}
      >
        {to ? (
          <HashLink to={to}>{button}</HashLink>
        ) : (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {button}
          </a>
        )}
      </button>
    </div>
  );
};

export default TextBox;
