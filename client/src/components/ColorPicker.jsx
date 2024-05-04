import React from "react";
import { useSnapshot } from "valtio";
import { SketchPicker } from "react-color";
import state from "../store";
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#d1d8e0",
          "#F8EFBA",
          "#CAD3C8",
          "#BDC581",
          "#FEA47F",
          "#D6A2E8",
          "#EAB543",
          "#badc58",
          "#ffbe76",
          "#c7ecee",
          "#9c88ff",
          "#353b48",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
