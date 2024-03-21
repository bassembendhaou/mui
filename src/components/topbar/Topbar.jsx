import "./topbar.css";
import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">LOGO</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends or posts ..."
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person className="topbarIcon" />
              <div className="topBarIconBadge">1</div>
            </div>
            <div className="topbarIconItem">
              <Chat className="topbarIcon" />
              <div className="topBarIconBadge">2</div>
            </div>
            <div className="topbarIconItem">
              <Notifications className="topbarIcon" />
              <div className="topBarIconBadge">1</div>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/demo/image/twitter_name/BillClinton.jpg"
          alt=""
          className="topBarImg"
        />
      </div>
    </div>
  );
}
