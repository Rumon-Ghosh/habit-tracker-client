import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-base-200 text-base-content mt-5 p-10">
      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-15">
        <aside className="col-span-1">
          <p className="text-lg font-bold text-purple-500">Habit Tracker</p>
          <img src="https://i.ibb.co/Kxwb7rqF/img-icons8.png" alt="Logo" />
        </aside>
        <nav className="flex flex-col col-span-1">
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">+123456789</a>
          <a className="link link-hover">HabitTrack@mail.com</a>
          <a className="link link-hover">HabitTrack@yahoo.com</a>
          <a className="link link-hover">habit@tracker.com</a>
        </nav>
        <nav className="flex flex-col col-span-1">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="flex flex-col col-span-1">
          <h6 className="footer-title">Socials</h6>
          <a className="link link-hover text-2xl">
            <FaFacebook></FaFacebook>
          </a>
          <a className="link link-hover text-2xl">
            <FaInstagram></FaInstagram>
          </a>
          <a className="link link-hover text-2xl">
            {" "}
            <FaXTwitter></FaXTwitter>{" "}
          </a>
          <a className="link link-hover text-2xl">
            <FaLinkedin></FaLinkedin>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
