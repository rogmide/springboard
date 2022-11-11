import React, { useState } from "react";

const StoryDisplay = ({
  title = "Lorem ipsum dolor sit amet",
  text = `Libero id faucibus nisl tincidunt eget. 
          In hac habitasse platea dictumst quisque 
          sagittis. Hac habitasse platea dictumst quisque. 
          Ultrices vitae auctor eu augue. Vulputate mi sit
          amet mauris commodo quis imperdiet massa. Ac 
          auctor augue mauris augue neque gravida. Quisque
          non tellus orci ac auctor augue mauris augue neque.
          Amet dictum sit amet justo donec enim. Lorem ipsum
          dolor sit amet. In fermentum et sollicitudin ac.
          Quis auctor elit sed vulputate mi sit amet mauris
          commodo. Id faucibus nisl tincidunt eget. 
          Hac habitasse platea dictumst vestibulum rhoncus est.
  `,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default StoryDisplay;
