import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBtn } from "../../features/button";
import { Section } from "../../features/container";
import { PageNotFound } from "./styled404";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <PageNotFound>
      <Section>
        <h1>Page Not Found</h1> <br />
        <NavBtn onClick={() => navigate("/")}>Go To Home</NavBtn>
      </Section>
    </PageNotFound>
  );
};

export default NotFound;
