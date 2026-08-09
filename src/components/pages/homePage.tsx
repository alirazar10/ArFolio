"use client";

import { HERO } from "@/content";
import { heroImage } from "@/configs/cloudinary";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { generateImageUrl } from "../libs/imageCreator";
import Image from "next/image";
import { fadeUp, stagger } from "@/configs/motion";

export default function HomePage(): React.ReactElement {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-10 items-center min-h-screen py-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger(0.12, 0.1)}
        className="lg:col-span-3 order-2 lg:order-1"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-accent-500 text-sm tracking-widest uppercase mb-4"
        >
          {HERO.greeting}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-50 leading-[1.05] mb-4"
        >
          {HERO.name}.
        </motion.h1>
        <motion.h2
          variants={fadeUp}
          className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-primary-200 mb-6"
        >
          {HERO.tagLine}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-primary-300 text-sm lg:text-base leading-6 lg:leading-7 max-w-xl mb-8"
        >
          {HERO.description}
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link
            className="inline-block px-8 py-3 font-mono text-sm tracking-widest uppercase border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-primary-900 rounded-md transition-all duration-300 ease-out transform hover:scale-105 cursor-pointer"
            href={"#contact"}
            to={"contact"}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            aria-label="Contact me link"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.645, 0.045, 0.355, 1], delay: 0.2 }}
        className="lg:col-span-2 order-1 lg:order-2 mx-auto lg:mx-0 w-[70vw] max-w-sm lg:w-full"
      >
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-secondary-600 shadow-primary-lg">
          <div className="absolute inset-0 bg-linear-to-t from-primary-500/60 via-transparent to-transparent z-10" />
          <Image
            src={generateImageUrl(heroImage.imagePublicId)}
            width={640}
            height={640}
            className="object-cover object-center h-full w-full"
            alt="Portrait of Ali Reza"
            priority={true}
          />
        </div>
      </motion.div>
    </div>
  );
}
