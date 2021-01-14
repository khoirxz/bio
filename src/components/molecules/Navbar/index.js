import React from "react";
import { Menu } from "../../../assets/Icons";
import { Modal } from "../../molecules";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <nav className="flex justify-between w-4/5 mx-auto p-5">
      <div className="flex">
        <motion.h1
          className="uppercase font-bold text-lg"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          Howdy
        </motion.h1>
      </div>
      <ul className="hidden lg:flex uppercase">
        <li className="px-4">
          <a
            className="transition duration-500 border-b-2 border-transparent pb-1 hover:border-white"
            href="#a"
          >
            soon
          </a>
        </li>
        <li className="px-4">
          <a
            className="transition duration-500 border-b-2 border-transparent pb-1 hover:border-white"
            href="#a"
          >
            soon
          </a>
        </li>
        <li className="px-4">
          <a
            className="transition duration-500 border-b-2 border-transparent pb-1 hover:border-white"
            href="#a"
          >
            soon
          </a>
        </li>
      </ul>
      <div className="lg:hidden">
        <motion.button
          className="uppercase text-white"
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}
        >
          <Menu classed="w-8 cursor-pointer" />
        </motion.button>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </nav>
  );
};

export default Navbar;
