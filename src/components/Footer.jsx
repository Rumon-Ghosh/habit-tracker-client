import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-base-200 text-base-content mt-5 p-5 md:p-10">
      <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-15">
        <aside className="col-span-1">
          <p className="text-lg font-bold text-purple-500">HabitFlow</p>
          <img className="w-fit" src="https://i.ibb.co/Kxwb7rqF/img-icons8.png" alt="Logo" />
        </aside>
        <nav className="flex flex-col col-span-1">
          <h6 className="footer-title">Contact</h6>
          <a href="tel:+123456789" className="link link-hover">+123456789</a>
          <a href="mailto:HabitTrack@mail.com" className="link link-hover">HabitTrack@mail.com</a>
          <a href="mailto:HabitTrack@yahoo.com" className="link link-hover">HabitTrack@yahoo.com</a>
          <a href="mailto:habit@tracker.com" className="link link-hover">habit@tracker.com</a>
        </nav>
        <nav className="flex flex-col col-span-1">
          <h6 className="footer-title">Legal</h6>
          <Link to={`/terms`} className="link link-hover">Terms of use</Link>
          <Link to={`/privacy-policy`} className="link link-hover">Privacy policy</Link>
          <Link to="/cookie" className="link link-hover">Cookie policy</Link>
        </nav>
        <nav className="flex flex-col gap-1 col-span-1">
          <h6 className="footer-title">Socials</h6>
          <div className="grid grid-cols-2 gap-3">
            <a href="https://www.facebook.com" target="_black"
              className="link link-hover text-2xl">
            <FaFacebook></FaFacebook>
          </a>
            <a href="https://www.instagram.com" target="_black"
              className="link link-hover text-2xl">
            <FaInstagram></FaInstagram>
          </a>
            <a href="https://x.com" target="_black"
              className="link link-hover text-2xl">
            {" "}
            <FaXTwitter></FaXTwitter>{" "}
          </a>
            <a href="https://www.linkedin.com" target="_black"
              className="link link-hover text-2xl">
            <FaLinkedin></FaLinkedin>
          </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
