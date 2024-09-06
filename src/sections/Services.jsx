import { services } from "../constants/index";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";

export const Slideleft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x:0,
      transition: {
        type:"spring",
        stiffness: 100,
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <motion.div
    initial={{opacity:0 , x:50}}
    whileInView={{opacity:1 , x:0}}
    transition={{duration:0.8}}

    className="max-container padding-x flex items-start justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard 
          key={service.label} 
          imgURL={service.imgURL} 
          label={service.label} 
          subtext={service.subtext} 
        />
      ))}
    </motion.div>
  );
};

export default Services;
