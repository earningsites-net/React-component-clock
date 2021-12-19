import React from "react";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Have a nice Morning!";
  customStyle.color = "#d6cc0b";
} else if (currentTime < 18) {
  greeting = "Enjoy your Afternoon!";
  customStyle.color = "#8c0404";
} else {
  greeting = "Good Night!";
  customStyle.color = "#190887";
}

function Heading() {
  return (
    <React.Fragment>
      <h2 className="heading">What time is it?</h2>
      <h1 className="heading" style={customStyle}>
        It's {currentTime}: {greeting}
      </h1>
    </React.Fragment>
  );
}

export default Heading;
