import React from 'react'
import Topbar from '../../sharedComponents/Topbar'
import Header from "../../sharedComponents/Header"
import Footer from "../../sharedComponents/Footer"
import Main from "./Main"



function index() {
  return (
    <>
    <Topbar/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

export default index