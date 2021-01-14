import React from "react";
import { Navbar } from "../components/molecules";
import { motion } from "framer-motion";

const App = () => {
  return (
    <main className="bg-gradient-to-r from-primary to-secondary h-screen text-white font-display">
      <Navbar />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="w-5/6 mx-auto mt-20 lg:mt-96"
      >
        <h1 className=" text-3xl lg:text-5xl">
          <span className="font-bold">Halo</span> !, saya Rizqi !
        </h1>
        <h2 className="pt-3 lg:pt-5">
          Saya suka membuat sesuatu dengan Text Editor 😁
        </h2>
      </motion.div>
    </main>
  );
};

export default App;
