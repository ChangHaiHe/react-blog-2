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
            {/* <Link to="/"> changhai</Link> */}
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
            {/* <audio src="https://api.i-meto.com/meting/api?server=netease&amp;type=url&amp;id=1808556594&amp;auth=dda4d86b0c004a6106849eabac188cc799d0c98c" title="夜航星 - 洛天依"></audio> */}
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
