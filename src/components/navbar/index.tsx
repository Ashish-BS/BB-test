import React from "react";
import Link from "next/link";
import Logo from "../../../public/images/logo.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <header className="b-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container justify-content-between">
          <Link className="navbar-brand b-navbar-brand" href="/">
            <Image
              src={Logo.src}
              width={170}
              height={50}
              alt="BombayBees logo"
            />
          </Link>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            {/* <ul className="navbar-nav">
                            {navbarItems?.length ? navbarItems.map(item => (
                                <li
                                    key={item.id}
                                    className={`nav-item b-nav-item ${currentPath === item.link ? "active" : ""
                                        }`}
                                >
                                    <Link className="nav-link b-nav-link" href={item.link}>
                                        {item.title}
                                    </Link>
                                </li>

                            )) : null}
                        </ul> */}
          </div>
          <div className="b-header-right">
            <Link
              href="/contact-us"
              className="btn b-contact-btn b-btn-border-hover"
            >
              Let's talk
            </Link>
            <Link
              className="btn b-contact-btn b-btn-border-hover m-3"
              href="/blog"
            >
              Blog
            </Link>
            {/* <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#navbarOffcanvas"
                            aria-controls="navbarOffcanvas"
                        >
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button> */}
          </div>
          {/* <div
                        className="offcanvas offcanvas-end b-offcanvas-menu"
                        tabIndex={-1}
                        id="navbarOffcanvas"
                        aria-labelledby="navbarOffcanvas"
                    >
                        <div className="offcanvas-header">
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className='offcanvas-body'>
                            <ul className="navbar-nav">
                                {navbarItems?.length ? navbarItems.map(item => (
                                    <li
                                        key={item.id}
                                        className={`nav-item b-nav-item ${currentPath === item.link ? "active" : ""
                                            }`}
                                    >
                                        <Link className="nav-link b-nav-link" data-bs-dismiss="offcanvas" href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>

                                )) : null}
                            </ul>

                            <Link href="/contact-us" data-bs-dismiss="offcanvas" className="btn b-contact-btn">
                                Let's talk
                            </Link>
                        </div>

                    </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
