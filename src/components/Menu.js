import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Menu.css';

const Menu = ({ data, orientation }) => {
    const [expandedMenu, setExpandedMenu] = useState(null);

    const handleMenuClick = (menuName) => {
        setExpandedMenu(expandedMenu === menuName ? null : menuName);
    };
  
  return (
    <div className={`menu-container ${orientation}`}>
      {Array.isArray(data) && data.map((menu, index) => (
        <ul key={index}>
          <li>
            <h3 onClick={() => handleMenuClick(menu.name)}>{menu.name}</h3>
            {menu.subMenu && (
              <ul className={expandedMenu === menu.name ? 'expanded' : 'collapsed'}>
                {menu.subMenu.map((subMenu, subIndex) => (
                    <li key={subIndex}>
                    {subMenu.page ? (
                      <Link to={`/${subMenu.page}`}>{subMenu.name}</Link>
                    ) : (
                      <p>{subMenu.name}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Menu;
