import React from "react";
import { Avatar, MantineProvider, Menu } from "@mantine/core";
const ProfileMenu = ({ user, logout }) => {
  return (
    // <MantineProvider>
      <Menu>
        <Menu.Target>
          <Avatar src={user?.picture} alt="user image" radius={"xl"} />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>Favourites</Menu.Item>
          <Menu.Item>Bookings</Menu.Item>
          <Menu.Item onClick={() =>{localStorage.clear(); logout()}}>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    // </MantineProvider> 
  );
};

export default ProfileMenu;
