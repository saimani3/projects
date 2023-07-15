import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div>
        <footer>
        <div className="container">
            <div className="social text-center">
            Talk To Nsm Hospital On Social Media:
                <a href="https://youtube.com/channel/UCHN8dOJ8HqviepnNEh5myQA" > <FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                <a href="https://www.facebook.com/profile.php?id=100075833536540" > <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://twitter.com/home"> <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="www.google.com" > <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            </div>

            <div className="clear"></div>
        </div>
    </footer>
    </div>
  )
}

export default Footer