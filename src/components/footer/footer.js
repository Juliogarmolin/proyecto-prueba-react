// src/components/footer/footer.js
import React from "react";
import {
  FooterContainer,
  FooterLinks,
  FooterCopy,
  FooterIcons,
  SocialIcons,
  StoreIcons
} from "./Footer.styled";

import appStore from "../../assets/store/app-store.svg";
import playStore from "../../assets/store/play-store.svg";
import windowsStore from "../../assets/store/windows-store.svg";
import facebook from "../../assets/social/facebook-white.svg";
import twitter from "../../assets/social/twitter-white.svg";
import instagram from "../../assets/social/instagram-white.svg";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="/">Home</a>
        <a>Terms and Conditions</a>
        <a>Privacy Policy</a>
        <a>Collection Statement</a>
        <a>Help</a>
        <a>Manage Account</a>
      </FooterLinks>

      <FooterCopy>
        © 2016 DEMO Streaming. All Rights Reserved.
      </FooterCopy>

      <FooterIcons>
        <SocialIcons>
          <a>
            <img src={facebook} alt="Facebook" />
          </a>
          <a>
            <img src={twitter} alt="Twitter" />
          </a>
          <a>
            <img src={instagram} alt="Instagram" />
          </a>
        </SocialIcons>
        <StoreIcons>
          <a>
            <img src={appStore} alt="App Store" />
          </a>
          <a>
            <img src={playStore} alt="Play Store" />
          </a>
          <a>
            <img src={windowsStore} alt="Windows Store" />
          </a>
        </StoreIcons>
      </FooterIcons>
    </FooterContainer>
  );
}

export default Footer;
