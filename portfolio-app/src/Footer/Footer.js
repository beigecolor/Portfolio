import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

const footer = () => {
  return (
    <footer>
      <div className="social-links">
        <SocialIcon className="instagram" url="http://instagram.com" />
        <SocialIcon className="twitter" url="http://twitter.com" />
        <SocialIcon className="facebook" url="http://facebook.com" />
      </div>
      <div className="footerdiv">
        <input type="text" placeholder="Email Address" />
        <button type="submit">Keep in Touch</button>
      </div>

      <p className="copyright">&copy;2019 J Lipardo</p>
    </footer>
  );
};

export default footer;
