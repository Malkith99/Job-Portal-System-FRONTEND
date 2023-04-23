import React from "react";
import HeaderTop from "./headerTop/headerTop";
import Title from "./title/title";
import HeaderBottom from "./headerBottom/headerBottom";

function MainHeader(props) {
  return (
    <div>
      <HeaderTop isLogedIn={props.isLogedIn} />
      <Title />
      <HeaderBottom
        content={props.content}
        isLogedIn={props.isLogedIn}
        onLogout={props.onLogout}
      />
    </div>
  );
}

export default MainHeader;
