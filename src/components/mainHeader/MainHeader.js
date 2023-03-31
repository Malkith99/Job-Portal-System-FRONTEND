import React from "react";
import HeaderTop from "./headerTop/HeaderTop";
import Title from "./title/Title";
import HeaderBottom from "./headerBottom/HeaderBottom";

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
