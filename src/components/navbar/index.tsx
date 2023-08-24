import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const Navbar = () => {
    const router = useRouter();
    const currentPath = router.pathname;
    return (
        <header className='b-header'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand b-navbar-brand" href="#"><span className='b-yellow-title'>BOMBAY</span><span className='b-black-title'>BEES</span></Link>
                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav">
                            <li
                                className={`nav-item b-nav-item ${currentPath === "/" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link b-nav-link" href="/">
                                    Home
                                </Link>
                            </li>
                            <li
                                className={`nav-item b-nav-item ${currentPath === "/about" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link b-nav-link" href="/about">
                                    About
                                </Link>
                            </li>
                            <li
                                className={`nav-item b-nav-item ${currentPath === "/testimonials" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link b-nav-link" href="/testimonials">
                                    Testimonials
                                </Link>
                            </li>
                            <li
                                className={`nav-item b-nav-item ${currentPath === "/what-will-you-get" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link b-nav-link" href="/what-will-you-get">
                                    What will you get?
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="b-header-right">
                        <Link href="/contact-us" className="btn b-contact-btn">
                            Let's talk
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample"
                            aria-controls="offcanvasExample"
                        >
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                    </div>
                    <div
                        className="offcanvas offcanvas-end b-offvanvas-menu"
                        tabIndex={-1}
                        id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel"
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
                                <li
                                    className={`nav-item b-nav-item ${currentPath === "/" ? "active" : ""
                                        }`}
                                >
                                    <Link className="nav-link b-nav-link" href="/">
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className={`nav-item b-nav-item ${currentPath === "/about-us" ? "active" : ""
                                        }`}
                                >
                                    <Link className="nav-link b-nav-link" href="/about-us">
                                        About
                                    </Link>
                                </li>
                                <li
                                    className={`nav-item b-nav-item ${currentPath === "/testimonials" ? "active" : ""
                                        }`}
                                >
                                    <Link className="nav-link b-nav-link" href="/testimonials">
                                        Testimonials
                                    </Link>
                                </li>
                                <li
                                    className={`nav-item b-nav-item ${currentPath === "/what-will-you-get" ? "active" : ""
                                        }`}
                                >
                                    <Link className="nav-link b-nav-link" href="/what-will-you-get">
                                        What will you get?
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar