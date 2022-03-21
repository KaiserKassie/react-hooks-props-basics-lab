import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
        <div>
        {(props.bio !== null) ? <p>{props.bio}</p> : null}
        </div>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={props.links}>Links</a>
    </div>
  );
}

export default About;
