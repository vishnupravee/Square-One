import React, { useState } from "react";
import "./Navbar.css";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  bookOutline,
  bagHandleOutline,
  callOutline,
} from "ionicons/icons";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { name: "Home", icon: homeOutline, id: "home" },
    { name: "About", icon: bookOutline, id: "about" },
    { name: "Products", icon: bagHandleOutline, id: "products" },
    { name: "Contact", icon: callOutline, id: "contact" },
  ];

  return (
    <div className="navbar-container">
      {/* Logo on Left */}
      <div className="logo">
        SQUARE <span>ONE</span>
      </div>

      {/* Navigation Center */}
      <div className="navigation">
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`list ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <a href={`#${item.id}`}>
                <span className="icon">
                  <IonIcon icon={item.icon} />
                </span>
                <span className="text">{item.name}</span>
              </a>
            </li>
          ))}
          {/* Red Circle Indicator */}
          <div
            className="indicator"
            style={{ transform: `translateX(${activeIndex * 100}px)` }}
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
