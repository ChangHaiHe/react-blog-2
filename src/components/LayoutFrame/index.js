

import React from "react";

import Nav from './Nav';
import './index.less';

const LayoutFrame = (props) => {

  const renderHeader = () => {
    return <Nav />
  }

  const renderContent = () => {
    return props.children
  }


  return (
    <div className="layout-frame">
      {renderHeader()}
      {renderContent()}
    </div>
  )
}


export default LayoutFrame;