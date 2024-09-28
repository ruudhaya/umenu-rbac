import React, { useState } from "react";
import './Menu.css';

const Menu = ({ data, orientation }) => {
    // create an array object copy from data props


    console.log("====> Data received:", data);
    const [expandedMenu, setExpandedMenu] = useState(null);

    const handleMenuClick = (menuName) => {
        setExpandedMenu(expandedMenu === menuName ? null : menuName);
    };
  // Create a sample data for hierarchy of roles and permissions for 3 menu items with submenus and pages within it
  
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
                    <p>{subMenu.name}</p>
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
