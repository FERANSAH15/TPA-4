import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer pt-5 bg-secondary mt-5">
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-1 justify-content-between">
          <div className="col col-lg-6 mb-lg-0 mb-4">
            <h2 className="fw-bold text-white mb-3">Ferdiansyah</h2>
            <p className="text-white-50">I'm Front-End Developer</p>
          </div>
          <div className="col col-lg-2 d-flex flex-column mb-lg-0 mb-4">
            <h5 className="fw-bold text-white">Menu</h5>
            <Link to={"/"} className="text-white-50 mt-3">
              Home
            </Link>
            <Link to={"/about"} className="text-white-50 mt-2">
              About
            </Link>
            <Link to={"/portopolio"} className="text-white-50 mt-2">
              Portopolio
            </Link>
            <Link to={"/blog"} className="text-white-50 mt-2">
              Blog
            </Link>
          </div>
          <div className="col col-lg-3 d-flex flex-column mb-lg-0 mb-4">
            <h5 className="fw-bold text-white mb-3">Contact</h5>
            <a href="#" className="text-white-50 mt-2">
              +62 858 8021 4877
            </a>
            <a href="#" className="text-white-50 mt-2">
              ferdiansyah.fa661@gmail.com
            </a>
            <p className="text-white-50 mt-2">Tangerang, Banten, Indonesia.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <p className="text-white text-center copytext">&copy; Copyright 2022 by Ferdiansyah, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;