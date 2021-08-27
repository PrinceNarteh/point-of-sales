import { useState } from "react";
import { Input, Menu } from "semantic-ui-react";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <Menu secondary>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={() => setActiveItem("home")}
      />
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        onClick={() => setActiveItem("messages")}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={() => setActiveItem("friends")}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={() => setActiveItem("logout")}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default SideBar;
