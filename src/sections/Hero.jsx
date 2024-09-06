import Button from "../components/Button";
import { statistics } from "../constants/index";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { shoes } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full padding-x flex flex-col xl:flex-row justify-center gap-10 min-h-screen"
    >
      <motion.div 
                    variants={fadeUp(0.3)}
                    whileInView="animate"
                    initial="initial"
      
      className="flex flex-col items-start justify-start xl:w-2/5 z-10 w-full px-6 pt-28">
        <motion.p
                      variants={fadeUp(0.6)}
                      initial="initial"
                      whileInView="animate"

        className="text-xl mt-10 font-montserrat text-coral-red">
          Our Summer Collection
        </motion.p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold max-sm:leading-[]">
          <span className="xl:bg-white inline-block mt-3 xl:whitespace-nowrap relative pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg  sm:text-xl leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-center gap-16 mt-20 w-full flex-wrap">
          {statistics.map((i) => (
            <div key={i.label}>
              <p className="font-bold text-4xl font-palanquin">{i.value}</p>
              <p className="text-slate-gray">{i.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}

      className="flex flex-1 items-center justify-center xl:min-h-screen bg-primary bg-hero bg-cover bg-center relative">
  <img
    src={bigShoeImg}
    alt="Nike Shoes"
    className="w-full max-w-[610px] h-auto"
  />
  <div className="flex absolute sm:gap-6 gap-4 px-6 left-1/2 transform -translate-x-1/2 sm:-bottom-[5%] -bottom-[10%] w-full justify-center">
    {shoes.map((shoe, index) => (
      <div key={index}>
        <ShoeCard
          imgURL={shoe}
          changeBigShoeImage={(newShoeImg) => setBigShoeImg(newShoeImg)}
          bigShoeImg={bigShoeImg}
        />
      </div>
    ))}
  </div>
</motion.div>
    </section>
  );
};

export default Hero;
