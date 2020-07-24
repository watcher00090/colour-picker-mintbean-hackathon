import React, { useState } from "react";
import "./App.css";
import Palette from "./Palette";
import Settings from "./Navbar";
import $ from "jquery";

function App() {
  const [hex, changeHex] = useState("#5f42ad");
  const [variation, changeVariation] = useState("analogous");
  const [setting, changeSetting] = useState();
  const [settingValue, changeSettingValue] = useState(20);
  const [colorWheelEnabled, setColorWheelEnabled] = useState(false);

  return (
    <div className="App">
      <Settings
        changeSetting={changeSetting}
        changeVariation={changeVariation}
        changeHex={changeHex}
        changeSettingValue={changeSettingValue}
        setColorWheelEnabled={setColorWheelEnabled}
        colorWheelEnabled={colorWheelEnabled}
      />
      <Palette
        settingValue={settingValue}
        setting={setting}
        variation={variation}
        hex={hex}
        colorWheelEnabled={colorWheelEnabled}
      />
    </div>
  );
}

export default App;
