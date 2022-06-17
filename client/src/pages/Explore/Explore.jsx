import React from "react";
import "./Explore.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import ExploreSide from "../../components/ExploreSide/ExploreSide";

const Explore = () => {
  return (
    <div className="Explore">
      <ProfileSide />
      <ExploreSide />
      <RightSide />
    </div>
  );
};

export default Explore;
