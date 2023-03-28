import React from 'react'
import Headertop from '../headertop'
import Title from '../title'
import Headerbottom from '../headerbottom'

function MainHeader(props) {
    // console.log(props.pathname);
  return (
    <div>
        <Headertop isLogedIn={props.isLogedIn} />
        <Title/>
        <Headerbottom content={props.content} isLogedIn={props.isLogedIn} onLogout={props.onLogout}/>
    </div>
  )
}

export default MainHeader