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
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          {/*image*/}
          <motion.div variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top "></motion.div>

          {/*text*/}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>

            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm a Freelance Front-end Developer with over 5 years of experience.</h3>
            <p>Welcome to my personal website! I specialize in creating user-friendly and responsive web interfaces. With a passion for coding and a keen eye for design, I strive to deliver high-quality solutions that meet client expectations.</p>

            {/*stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-3">

              <div>
                <div className="text-{60px} font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3}></CountUp> : null}
                </div>

                <div className="font-primary text-sm tracking-{2px}">Years of <br />Experience</div>

              </div>

              <div>
                <div className="text-{60px} font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3}></CountUp> : null}
                </div>
                <div className="font-primary text-sm tracking-{2px}">Project  <br />Completed</div>
              </div>

              <div>
                <div className="text-{60px} font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3}></CountUp> : null}
                </div>
                <div className="font-primary text-sm tracking-{2px}">satisfied <br />customers</div>

              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">My Portfolio</a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
