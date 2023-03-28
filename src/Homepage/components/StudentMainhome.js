import React from 'react'
import MainHeader from '../../components/MainHeader/MainHeader'
import {Link} from "react-router-dom"

function StudentMainhome({isLogedIn, onLogout}) {
    
  const content = <><Link to="/">Student Home</Link></>;
  return (
    <div>
    <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/></div>
  )
}

export default StudentMainhome