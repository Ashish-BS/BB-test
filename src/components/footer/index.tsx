import Link from "next/link";
import React from "react";

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
              className="btn b-common-btn-no-arrow "
            >
              Let's talk
            </Link>
          </div>

          {/*icons*/}

          <div className="footer-social icons col-lg-2 col-md-4 ">
            <div className="followUs">
              <p>Follow us</p>
            </div>
            <div className="middle">
              <Link
                href="https://www.facebook.com/bombaybeesofficial"
                target="_blank"
                className="btn-social"
              >
                <img src="images/facebookBB.svg" alt="facebook svg" />
              </Link>
              <Link
                href="https://www.instagram.com/bombaybees"
                target="_blank"
                className="btn-social"
              >
                <img src="images/instagramBB.svg" alt="instagram SVG" />
              </Link>
              <Link
                href="https://twitter.com/bombay_bees"
                target="_blank"
                className="btn-social"
              >
                <img src="images/twitterBB.svg" alt="twitter SVG" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCeFJdgdX7bSG64Fc_xEQVJQ?sub_confirmation=1"
                target="_blank"
                className="btn-social"
              >
                <img src="images/youtubeBB.svg" alt="Youtube SVG" />
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
