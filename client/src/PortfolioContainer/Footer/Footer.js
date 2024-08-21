import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  // 滚动到页面顶部的函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-container">
      <div className="back-to-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      © CHIHIRO
    </footer>
  );
};

export default Footer;
