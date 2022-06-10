import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { StyledMenu, StyledMenuItem } from "./components/StyledMenu";
import { adminMenuItems, employeeMenuItems } from "./constants/menuItems";

const Menu = () => {
  const handleClick = () => {};

  const { role } = useAppSelector((state) => state.auth);

  const menuItems = role?.role_id === 1 ? adminMenuItems : employeeMenuItems;

  return (
    <StyledMenu>
      {menuItems.map((item, index) => (
        <StyledMenuItem key={index} onClick={handleClick}>
          <Link to={item.url}>{item.name}</Link>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};

export default Menu;
