import React from "react";
import Button from "@material-ui/core/Button";

import "./style.css";
export default () => (
  <div className="footer-container">
    <div className="__footer-top">
      <span>Unite with us, join the revolution.</span>
      <Button variant="raised" color="primary">
        Join Now
      </Button>
    </div>
    <div className="__footer-bottom">
      <div className="__footer-links">
        <span>About</span>
        <span>Help</span>
        <span>Privacy Policy</span>
        <span>Legal</span>
        <span>Blog</span>
        <span>Press</span>
      </div>
      <hr className="__footer-hr" />
      <div className="__footer-copyright">
        © 2018 TwoLambdaLabs Inc. All rights reserved.
      </div>
    </div>
  </div>
);
