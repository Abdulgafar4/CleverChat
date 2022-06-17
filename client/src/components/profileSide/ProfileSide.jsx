import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import IconSide from "./IconSide";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileSide.css";
const ProfileSide = () => {
  return (
    <div>
      <div className="ProfileSide">
        <LogoSearch />
        <ProfileCard location="homepage" />
        <FollowersCard />
      </div>
      <div className="ProfileSideIcon">
        <IconSide />
      </div>
    </div>
  );
};

export default ProfileSide;
