import React from 'react';
import './Ideas.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Idea1Pic1 from '/src/assets/Vapebattery.png';
import Idea1Pic2 from '/src/assets/VapeC.png';
import Idea2Pic1 from '/src/assets/PerkBottle1.png';
import Idea2Pic2 from '/src/assets/PerkBottle2.png';
import Schematic1 from '/src/assets/VapeBatterySchematic.pdf'; // Replace with your PDF path
import Schematic2 from '/src/assets/PerkBottleSchematic.pdf'; // Replace with your PDF path

const idea1Images = [
  { original: Idea1Pic1 },
  { original: Idea1Pic2 },
];

const idea2Images = [
  { original: Idea2Pic1 },
  { original: Idea2Pic2 },
];

export const Ideas = () => {
  return (
    <div className="ideas-container">
      <h1 className="ideas-header">Ideas</h1>
      <div className="ideas-box">
        {/* Project Idea 1 */}
        <div className="ideas-box-left" style={{ position: 'relative' }}>
          <h2 className="title">Vape Battery Project</h2>
          <button className="download-button" onClick={() => window.open(Schematic1)}>
            Download Schematic
          </button>
          <p className="description">This project involves repurposing a Geek Bar vape into a portable phone charger by integrating a battery management system for safe charging on the go.</p>
          <p className="description">Difficulty: ★★☆☆☆</p>
          
          <h2 className="sub-title">Materials & Tools Required:</h2>
          <ul className="c">
              <li>1x Geek Bar Vape</li>
              <li>1x Single Cell Battery Management System (BMS)</li>
              <li>2x Wires with Connector</li>
              <li>1x 5 Volt Out Module</li>
              <li>Sharp Knife</li>
              <li>Soldering Iron</li>
              <li>Wire Cutters</li>
          </ul>
          
          <h2 className="sub-title">Skills Required:</h2>
          <ul className="c">
              <li>Soldering</li>
              <li>Circuits</li>
          </ul>
        </div>

        {/* Project Idea 1 Images */}
        <div className="ideas-box-right">
          <ImageGallery items={idea1Images} />
        </div>
      </div>

      <div className="ideas-box">
        {/* Project Idea 2 */}
        <div className="ideas-box-left" style={{ position: 'relative' }}>
          <h2 className="title">Call of Duty Zombies Perk Bottle Lamps</h2>
          <button className="download-button" onClick={() => window.open(Schematic2)}>
          Download Schematic
          </button>
          <p className="description">Transform empty Smirnoff bottles into stylish lamps inspired by Call of Duty Zombies perk bottles.</p>
          <p className="description">Difficulty: ★★★☆☆ </p>
          
          <h2 className="sub-title">Materials and Tools:</h2>
          <ul className="c">
            <li>Soldering iron</li>
            <li>Stickers</li>
            <li>Rocker switch</li>
            <li>Colored glass spray paint</li>
          </ul>

          <h2 className="sub-title">Skills Required:</h2>
          <ul className="c">
            <li>Soldering</li>
            <li>Circuits</li>
          </ul>
        </div>

        {/* Project Idea 2 Images */}
        <div className="ideas-box-right">
          <ImageGallery items={idea2Images} />
        </div>
      </div>
    </div>
  );
};
