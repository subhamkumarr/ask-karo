import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import AssignmentTurnedInOutlined from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlined from "@material-ui/icons/PeopleAltOutlined";
// import NotificationsOutlined from "@material-ui/icons/NotificationsOutlined"
import Search from "@material-ui/icons/Search";
import { Avatar, Button, Input } from "@material-ui/core";
import "./css/QuoraHeader.css";

const QuoraHeader = () => {
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
          </div>

          <div className="qHeader__icons">
            <div className="qHeader__icon">
              <HomeIcon />
            </div>
            <div className="qHeader__icon">
              <FeaturedPlayListIcon />
            </div>
            <div className="qHeader__icon">
              <AssignmentTurnedInOutlined />
            </div>
            <div className="qHeader__icon">
              <PeopleAltOutlined />
            </div>
            {/* <div className="qHeader__icon">
            <NotificationsOutlined />
          </div> */}
          </div>
          <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search questions" />
        </div>

          <div className="qHeader__Rem ">
            <Avatar />
          </div>

          <Button>Add Questions</Button>
        
      </div>
    </div>
  );
};

export default QuoraHeader;
