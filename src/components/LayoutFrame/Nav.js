import React from "react";
import {
  HomeOutlined,
  SearchOutlined,
  BarsOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Nav.less";

const Nav = () => {

  return (
    <div className="home-page">
      <div id="nav" className="nav show">
        <div className="inner">
          <ul className="menu">
            <Link to="/"> changhai</Link>
            <Link to="/home" className="item">
              <HomeOutlined className="home-icon" /> 首页
            </Link>
            <Link to="/article" className="item">
              <BarsOutlined className="article-icon" />
              文章
            </Link>
            <Link to="/friends" className="item">
              <HeartOutlined className="aixin-icon" />
              friends
            </Link>
          </ul>
          <ul className="right">
            {/* <li className='theme'><PoweroffOutlined /></li> */}
            <li className="search">
              <SearchOutlined />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
