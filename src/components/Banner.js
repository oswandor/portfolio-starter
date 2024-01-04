import React from "react";

// images
import Image from "../assets/image.png"
// icons
import { FaGithub, FaYoutube, FaDribbble  , FaEnvelope} from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => { 
  return (
    <section className="section pt-0" id="home">
      <div className="container mx-auto  sm:mt-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          <div className="flex-1 text-center font-secondary  lg:text-left">
            <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false , amount: 0.7}}   className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Ronal <span>Gonzalez</span>
            </motion.h1>

            <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false , amount: 0.7}}   className="mb-6 text-[30px] lg:text-[60px] font-secondary font-semibold  uppercase leading-[1]">
              <span className="mr-4">I am a</span>

              <TypeAnimation
                sequence={[
                  "Dev BackEnd",
                  200,
                  "Dev Fronentd",
                  2000,
                  "Cloud Arquitect",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
            </motion.div>

            <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false , amount: 0.7}} className="mb-8  max-w-lg mx-auto lg:mx-0">
              Soy desarrollador Full Stack altamente competente con experiencia
              en tecnologías líderes como React.js, Vue.js y ASP.NET Core en el
              entorno de desarrollo de aplicaciones web. Experto en la creación
              de interfaces de usuario interactivas y eficientes utilizando
              React.js y Vue.js, y habilidades probadas en el desarrollo del
              lado del servidor con ASP.NET Core.
            </motion.p>

            <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false , amount: 0.7}} className="mt-3 mb-3 flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-sm">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                {" "}
                My Portfolio
              </a>
            </motion.div>
      
            <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once: false , amount: 0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaGithub></FaGithub>
              </a>

              <a href="#">
                <FaEnvelope></FaEnvelope>
              </a>
    
              <a href="#" >
                <FaYoutube></FaYoutube>
              </a> 
            </motion.div>
          </div>

          <div className="sm:content-center hidden lg:flex flex-1 max-w-[320px] lg:max-w-[382px] mx-auto">
            <img src={Image}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
