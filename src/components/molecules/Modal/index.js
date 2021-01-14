import React from "react";
import { Close } from "../../../assets/Icons";
import { motion } from "framer-motion";

const Modal = ({ setShowModal }) => {
  return (
    <>
      <motion.div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-r from-primary to-secondary outline-none focus:outline-none h-screen">
            {/*header*/}
            <div className="flex items-end justify-end p-5 rounded-t">
              <button onClick={() => setShowModal(false)}>
                <Close classed="w-8 cursor-pointer" />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <ul className="my-4 text-lg leading-relaxed uppercase">
                {[0, 1, 2].map((index) => (
                  <li className="text-4xl font-bold pb-4" key={index}>
                    <a
                      className="transition duration-500 border-b-4 border-transparent hover:border-white"
                      href="#a"
                    >
                      soon
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
