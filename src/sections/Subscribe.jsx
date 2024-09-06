import { motion } from "framer-motion";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex items-center justify-center max-lg:flex-col gap-10" id="contact-us">
      <motion.h3
          initial={{opacity:0 , y:-50}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration:0.6}}
      
      className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up from <span className="text-coral-red"> Updates </span> & Newsletter</motion.h3>
       <motion.div
           initial={{opacity:0 , x:50}}
           whileInView={{opacity:1 , x:0}}
           transition={{duration:0.8}}
       
       className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up"/>
        </div>
       </motion.div>
    </section>
  )
}

export default Subscribe