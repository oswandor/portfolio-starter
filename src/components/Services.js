import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "UI/UX Desing",
    description: "Lorem , ipsum dolor sit amet consectetur adipsicing elit.",
    Link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">

      <div>
        {/*text*/}

        <div>
          <h2 className="h2 text-accent mb-6">What I Do.</h2>
        </div>

      </div>

      </div>
    </section>
  );
};

export default Services;
