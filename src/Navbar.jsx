import React from "react";
import { Navbar, Form, Nav, FormControl, NavDropdown, Popover } from "react-bootstrap";
//import Popover from "framework7-react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
//import spectrum from "spectrum-colorpicker2";
import $ from "jquery";
import ColorWheelPicker from "./ColorWheelPicker.js";
import * as FlexiColorPicker from "./colorpicker.js"

const tinycolor = require("tinycolor2");

export default function Settings({
  changeHex,
  changeVariation,
  changeSetting,
  changeSettingValue,
  setColorWheelEnabled,
  colorWheelEnabled
}) {
  const handleHexChange = e => {
    e.preventDefault();
    changeHex(e.target.value);
  };

  const handleVariationChange = variation => {
    changeVariation(variation);
  };

  const changeSettings = e => {
    const setting = e.target.getAttribute("value");
    changeSetting(setting);
  };

  const setRandom = () => {
    const randomColor = tinycolor.random().toHexString();
    changeHex(randomColor);
  };

  const handleSettingValueChange = e => {
    changeSettingValue(e);
  };

  const getColorPickerButtonText = function() {
    if (colorWheelEnabled) {
      return "Disable color picker wheel";
    } else {
      return "Enable color picker wheel";
    }
  }

  const toggleColorWheelState = function() {
    if (!colorWheelEnabled) {
      setColorWheelEnabled(true);
    } else {
      setColorWheelEnabled(false);
    }
  }

  const tieToSpectrum = function() {
    $('#color-picker').spectrum({
      type: "component"
    });    
  }

  const handleColorPickerOpenedEvent = e => {
    console.log("color picker opened completed!!");
  };
  
  const colorWheelPopOverHandle = (
    <Popover id="popover-basic">
      <Popover.Title>Pick a color!</Popover.Title>
      <Popover.Content>
        <input id="color-picker" defaultValue='#276cb8' />
        <div id="picker">Does this work?</div>
        <div id="slide">Does this work?</div>
      </Popover.Content>
      <ColorWheelPicker></ColorWheelPicker>
    </Popover>
  );
  
  /*
 const colorWheelPopOverHandle = (
  <PopoverColorPicker id="popover-basic">
    <PopoverColorPicker.Title>Pick a color!</PopoverColorPicker.Title>
    <PopoverColorPicker.Content>
      <input id="color-picker" defaultValue='#276cb8' />
    </PopoverColorPicker.Content>
  </PopoverColorPicker>
);
*/


  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand>Color Palette Generator</Navbar.Brand>
            <NavDropdown
              onSelect={e => handleVariationChange(e)}
              title="Variation"
              id="variation"
            >
              <NavDropdown.Item eventKey="analogous">
                Analogous
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="monochromatic">
                Monochromatic
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="complement">
                Complement
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="splitcomplement">
                Split Complement
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="triad">Triad</NavDropdown.Item>
              <NavDropdown.Item eventKey="tetrad">Tetrad</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider />

            <Nav.Link
              value={"lighten"}
              eventKey={"lighten"}
              onClick={e => changeSettings(e)}
            >
              Lighten
            </Nav.Link>
            <Nav.Link value={"brighten"} onClick={e => changeSettings(e)}>
              Brighten
            </Nav.Link>
            <Nav.Link value={"darken"} onClick={e => changeSettings(e)}>
              Darken
            </Nav.Link>
            <Nav.Link value={"desaturate"} onClick={e => changeSettings(e)}>
              Desaturate
            </Nav.Link>
            <Nav.Link value={"saturate"} onClick={e => changeSettings(e)}>
              Saturate
            </Nav.Link>
            <Nav.Link value={"greyscale"} onClick={e => changeSettings(e)}>
              Greyscale
            </Nav.Link>

            <NavDropdown
              onSelect={e => handleSettingValueChange(e)}
              title="Change Value (%)"
            >
              <NavDropdown.Item eventKey="2">10</NavDropdown.Item>
              <NavDropdown.Item eventKey="4">20</NavDropdown.Item>
              <NavDropdown.Item eventKey="6">30</NavDropdown.Item>
              <NavDropdown.Item eventKey="8">40</NavDropdown.Item>
              <NavDropdown.Item eventKey="12">50</NavDropdown.Item>
              <NavDropdown.Item eventKey="16">60</NavDropdown.Item>
              <NavDropdown.Item eventKey="20">70</NavDropdown.Item>
              <NavDropdown.Item eventKey="30">80</NavDropdown.Item>
              <NavDropdown.Item eventKey="40">90</NavDropdown.Item>
              <NavDropdown.Item eventKey="50">100</NavDropdown.Item>
            </NavDropdown>

            <OverlayTrigger trigger="click" placement="right" overlay={colorWheelPopOverHandle}>
              <Nav.Link id="ColorPickerWheelController" onClick={e => toggleColorWheelState(e)}>
                  {getColorPickerButtonText()}
              </Nav.Link>
            </OverlayTrigger>

          </Navbar.Collapse>
        </Nav>
        <Nav.Link id="random" onClick={() => setRandom()}>
          Random
        </Nav.Link>
        <Form onChange={e => handleHexChange(e)} inline>
          <FormControl type="text" placeholder="#77d36a" className="mr-sm-2" />
        </Form>
      </Navbar>
    </div>
  );
}


