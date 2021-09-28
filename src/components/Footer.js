import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <ul className="footer-sns">
        <li><a href="https://equal-love.jp" target="blank">
          Official Website</a></li>
      </ul>
      <ul class="footer-sns">
        <li>
          <a id="sns-yt" href="https://www.youtube.com/channel/UCv7VutirxDn3RWIJXI68n_A" target="blank">
            <FontAwesomeIcon icon={faYoutube} size="2x" /></a>
        </li>
        <li>
          <a id="sns-t" href="https://twitter.com/Equal_LOVE_12" target="blank">
            <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        </li>
      </ul>
    </footer >
  )
}

export default Footer;