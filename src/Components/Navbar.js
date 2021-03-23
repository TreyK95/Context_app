import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import {AccountConsumer,} from "../Providers/AccountProvider";

const Navbar = () => (
  <AccountConsumer>
    { value => (
  <Menu>
    <NavLink to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to="/account/profile">
      <Menu.Item>
        { value.UserName}
      </Menu.Item>
    </NavLink>
  </Menu> 
  )}
  </AccountConsumer>
)

export default Navbar;