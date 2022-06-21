import React from "react";
import { RiHome3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../img/cleverLogo .png";
import { UilSetting } from "@iconscout/react-unicons";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import "./ProfileSide.css";

const IconSide = () => {
  return (
    <div className="IconSide">
      {/* <p> */}
      <img src={Logo} alt="" width={65} />
      {/* </p> */}
      <p>
        <Link to="../home">
          <RiHome3Fill size={30} style={{ color: "#c06c84" }} />
        </Link>
      </p>
      <p>
        <Link to="../explore">
          <BsSearch size={25} style={{ color: "#000" }} />
        </Link>
      </p>
      <p>
        <Link to="../home">
          <MdOutlineNotificationsActive size={30} style={{ color: "#000" }} />
        </Link>
      </p>
      <p>
        <Link to="../chat">
          <AiOutlineMessage size={30} style={{ color: "#000" }} />
        </Link>
      </p>
      <p>
        <Link to="../home">
          <UilSetting size={30} style={{ color: "#000" }} />
        </Link>
      </p>
    </div>
  );
};

export default IconSide;
