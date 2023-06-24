import { useContext } from "react";
import {
  MENU_ITEMS,
  HORIZONTAL_MENU_ITEMS,
  HORIZONTAL_EMP_MENUS,
  TWO_COl_MENU_ITEMS,
  MenuItemTypes,
} from "../constants/menu";
import { AuthContext } from "../context/AuthContext";

const getMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return MENU_ITEMS;
};

// localstorage data
const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
const role: any = localStorage.getItem("role") ? JSON.parse(localStorage.getItem("role")!) : null
// TOTAL ATTANDANCE AND ALL ATTANDANCE
// const { user } = useContext(AuthContext)

const getHorizontalMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  if (role.trim() === "Admin") {
    return HORIZONTAL_MENU_ITEMS;
  } else{
    return HORIZONTAL_EMP_MENUS;
  }
};

const getTwoColumnMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return TWO_COl_MENU_ITEMS;
};

const findAllParent = (
  menuItems: MenuItemTypes[],
  menuItem: MenuItemTypes
): string[] => {
  let parents: string[] = [];
  const parent = findMenuItem(menuItems, menuItem["parentKey"]);

  if (parent) {
    parents.push(parent["key"]);
    if (parent["parentKey"])
      parents = [...parents, ...findAllParent(menuItems, parent)];
  }

  return parents;
};

const findMenuItem = (
  menuItems: MenuItemTypes[] | undefined,
  menuItemKey: MenuItemTypes["key"] | undefined
): MenuItemTypes | null => {
  if (menuItems && menuItemKey) {
    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      var found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
};

export {
  getMenuItems,
  getHorizontalMenuItems,
  getTwoColumnMenuItems,
  findAllParent,
  findMenuItem,
};
