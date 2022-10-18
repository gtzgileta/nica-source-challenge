import React from 'react';
import img from "../../assets/images";
import './Logo.scss';

const Logo = (props) => 
      <div id="logo" style={{ backgroundImage: `url(${img.core.logo})`, ...props }}></div>;

export default Logo;