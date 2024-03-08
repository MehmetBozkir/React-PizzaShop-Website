"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const words = `Welcome to our pizza haven! Are you ready to embark on a journey of deliciousness? You're about to step into a world filled with mouthwatering flavors prepared with the freshest ingredients.
`;

export function LampDemo() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Welcome To <br />Galaxy Pizza Shop
        </motion.h1>
        <div className="mt-24 text-center">
          <TextGenerateEffect words={words} />
        </div>
        <div className="mt-24">

        <button className="p-[3px] relative m-5">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <Link href={`/JoinLogin`}>Join & Login </Link>
        </div>
      </button>

        <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            <Link href={`/Menu`}>See menu </Link>
        </div>
      </button>
      </div>
      </LampContainer>
    </div>
  );
}
