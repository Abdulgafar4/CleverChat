import React from "react";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { RiHome3Fill } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <RiHome3Fill size={30} style={{ color: "#c06c84" }} />
      </Link>
      <Link to="../home">
        <MdOutlineNotificationsActive size={30} style={{ color: "#000" }} />
      </Link>
      <Link to="../chat">
        <AiOutlineMessage size={30} style={{ color: "#000" }} />
      </Link>
      <Link to="../home">
        <UilSetting size={30} style={{ color: "#000" }} />
      </Link>
    </div>
  );
};

export default NavIcons;
