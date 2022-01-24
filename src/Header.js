import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
  <div className="header">

    <div className="header_logo">
        <StorefrontIcon className="header_logoImage" fontSize="large"/>
      </div>
      <h2 className="header_logoTitle">Web-Shop</h2>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
        
      </div>

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <div className="nav_item">
          <ShoppingBasketIcon className="itemBasket" />
          <span className="nav_itemLineTwo nav_BasketCount">0</span>
        </div>
      </div>

  </div>
  )
}

export default Header;
