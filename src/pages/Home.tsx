// import React from 'react'
import HeroSection from "@/components/HeroSection"
import { FeatureThree } from "@/components/FeatureThree"
import { Projects } from "@/components/Projects"
import HireMe from "@/components/HireMe"
import { motion } from "framer-motion";
import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 120 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <>
      <motion.div
        className=""
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div className="" variants={fadeInUp}>
          <HeroSection />
        </motion.div>
        <motion.div className="" variants={fadeInUp}>
        <FeatureThree />
          </motion.div>
          <motion.div onViewportEnter={(entry) => {
            setMounted(entry?.isIntersecting ?? false); 
            console.log(entry)
            }} >
        {mounted && <motion.div className="" variants={fadeInUp}>
        <Projects />
          </motion.div>}
          </motion.div>
        <HireMe />
      </motion.div>
    </>
  )
}

export default Home
