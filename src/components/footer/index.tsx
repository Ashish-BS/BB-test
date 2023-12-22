import Link from "next/link";
import React from "react";
import instagramIcon from "../../../public/images/instagramBB.svg";
import facebookIcon from "../../../public/images/facebookBB.svg";
import youtubeIcon from "../../../public/images/youtubeBB.svg";
import twitterIcon from "../../../public/images/twitterBB.svg";

import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bb-footerContainer">
        <div className="bb-footer container">
          <div className="content col-lg-10 col-md-8">
            <h3>Know about our winning organic marketing strategy</h3>
            <Link
              href="/contact-us"
              data-bs-dismiss="offcanvas"
              className="b-common-btn-no-arrow "
            >
              Let's talk
            </Link>
          </div>

          {/*icons*/}

          <div className="footer-social icons col-lg-2 col-md-4 ">
            <div className="followUs">
              <h4 className="bb-followUS-tag">Follow us</h4>
            </div>
            <div className="middle">
              <Link
                href="https://www.facebook.com/bombaybeesofficial"
                target="_blank"
                className="btn-social"
              >
                <Image
                  src={facebookIcon}
                  alt="facebook"
                  width={23}
                  height={20}
                />
              </Link>
              <Link
                href="https://www.instagram.com/bombaybees"
                target="_blank"
                className="btn-social"
              >
                <Image
                  src={instagramIcon}
                  alt="instagram"
                  width={26}
                  height={24}
                />
              </Link>
              <Link
                href="https://twitter.com/bombay_bees"
                target="_blank"
                className="btn-social"
              >
                <Image src={twitterIcon} alt="twitter" width={24} height={19} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCeFJdgdX7bSG64Fc_xEQVJQ?sub_confirmation=1"
                target="_blank"
                className="btn-social"
              >
                <Image src={youtubeIcon} alt="youtube" width={22} height={19} />
              </Link>
            </div>
          </div>
        </div>

        <div className="b-footer">
          All Copyrights Reserved &#169; BombayBees
        </div>
      </footer>
    </>
  );
};

export default Footer;
