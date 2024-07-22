"use client";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import MainGraphic from "../../public/MainGaphix.png";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const textContent = {
  welcomeBox: {
    iconAltText: "Sparkles Icon",
    text: `"Turns projects into products" - Brian`,
  },
  launchText: {
    mainText: "You are ",
    highlightText: "100%",
    subText: " launching a product, today",
  },
  description: `Code Boilerplate, resource sheet & templates to turn developers into founders and help them launch instantly`,
  buttonText: "Launch Now",
};

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        // to setup how much black hole you wish to see in BG, just add mt-xx below
        // className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
        className="rotate-180 absolute top-[-540px] lg:top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row px-10 py-32 lg:mt-16 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              {textContent.welcomeBox.text}
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-5xl text-bold text-white max-w-[480px] w-auto h-auto lg:max-w-[600px]"
          >
            <span>
              {textContent.launchText.mainText}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {textContent.launchText.highlightText}
              </span>
              {textContent.launchText.subText}
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            {textContent.description}
          </motion.p>

          <motion.a
            variants={slideInFromLeft(1)}
            href="https:indiehackerkit.com"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            {textContent.buttonText}
          </motion.a>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full justify-center items-center mt-16 lg:mt-0 lg:flex"
        >
          <Image
            src={MainGraphic}
            alt="work icons"
            height={650}
            width={650}
            draggable={false}
            className="select-none rounded-xl shadow-xl ring-1 ring-gray-400/10  "
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
