import React from "react";
import { HashLink } from "react-router-hash-link";

const Listing = ({
  listing1,
  listing2,
  listing3,
  listing4,
  listing5,
  listing6,
  listing7,
  listing8,
  listing9,
  listing10,
  listing11,
  listing12,
  listing13,
  listing14,
  listing15,
  button,
  icon,
  purchase,
  display = "block",
  heading2,
  to,
}) => {
  return (
    <div className="lists df fdirc">
      <h2>{heading2}</h2>

      <ol className="list df fdirc">
        {listing1 ? <li> {listing1}</li> : null}
        {listing2 ? <li> {listing2}</li> : null}
        {listing3 ? <li> {listing3}</li> : null}
        {listing4 ? <li>{listing4}</li> : null}
        {listing5 ? <li> {listing5}</li> : null}
        {listing6 ? <li> {listing6}</li> : null}
        {listing7 ? <li> {listing7}</li> : null}
        {listing8 ? <li> {listing8}</li> : null}
        {listing9 ? <li> {listing9}</li> : null}
        {listing10 ? <li> {listing10}</li> : null}
        {listing11 ? <li> {listing11}</li> : null}
        {listing12 ? <li> {listing12}</li> : null}
        {listing13 ? <li> {listing13}</li> : null}
        {listing14 ? <li> {listing14}</li> : null}
        {listing15 ? <li> {listing15}</li> : null}
      </ol>
      <br />
      <p className="pricing">{purchase}</p>
      <br />
      <button style={{ display: display }}>
        <HashLink to={to}>
          {button}&nbsp;&nbsp;<span>{icon}</span>
        </HashLink>
      </button>
    </div>
  );
};

export default Listing;
