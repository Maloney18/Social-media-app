import React from "react";
import { CheckBox, Label, Slider, SwitcherCont } from "./styledSwitch";

const Switch = () => {
  return (
    <>
      <SwitcherCont>
        <Label>
          <CheckBox type="checkbox" />
          <Slider />
        </Label>
      </SwitcherCont>
    </>
  );
};

export default Switch;
