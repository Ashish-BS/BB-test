import Link from "next/link";
import Logo from "../../../public/images/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { string } from "yup";
import NavItem from "../navitems";

const Navbar: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blogs" },
    // { path: "/about", label: "About" },
    // { path: "/testimonials", label: "Testimonials" },
    // { path: "/xyz", label: "What will you get?" },
  ];

  return (
    <header className="b-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand b-navbar-brand mb-0" href="/">
            <Image
              src={Logo.src}
              width={170}
              height={50}
              alt="BombayBees logo"
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <NavItem
                  key={item.path}
                  path={item.path}
                  label={item.label}
                  currentPath={currentPath}
                />
              ))}
            </ul>
          </div>

          <div className="b-header-right">
            <Link
              href="/contact-us"
              className="btn b-contact-btn b-btn-border-hover"
            >
              Let's talk
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarOffcanvas"
              aria-controls="navbarOffcanvas"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>

          <div
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
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                {navItems.map((item) => (
                  <NavItem
                    key={item.path}
                    path={item.path}
                    label={item.label}
                    currentPath={currentPath}
                  />
                ))}
              </ul>

              <Link
                href="/contact-us"
                data-bs-dismiss="offcanvas"
                className="btn b-common-btn-no-arrow "
              >
                Let's talk
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
