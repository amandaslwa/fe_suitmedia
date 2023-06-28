import Dropdown from './Dropdown';
import { useState } from 'react';

const MapItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button 
          type="button" 
          aria-haspopup="menu" 
          aria-expanded={dropdown ? "true" : "false"}
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}>
            {items.title}{' '}
          </button>
          <Dropdown 
          submenus={items.submenu} 
          dropdown={dropdown}/>
        </>
      ) : (
        <p>{items.title}</p>
      )}
    </li>
  );
};

export default MapItems;