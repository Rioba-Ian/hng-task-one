import React from "react";
import github from "../assets/Social icon.svg";
import slack from "../assets/slack.svg";

const Socials = () => {
  return (
    <div className="App social__icons">
      <a href="https:slack.com/IanRioba">
        <img src={slack} alt="slack" />
      </a>
      <a href="https:github.com/Rioba-Ian">
        <img src={github} alt="github" />
      </a>
    </div>
  );
};

export default Socials;
