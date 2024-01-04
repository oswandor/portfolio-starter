import React from "react";
//countup
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container mx-auto">
        {/*image*/}
        <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top ">img</div>

        {/*text*/}
        <div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
