import Button from "../components/Button"
import {shoe8} from "../assets/images"
import { motion } from "framer-motion"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex padding-x justify-between items:center max-lg:flex-col  w-full max-container ">
      <motion.div
                  initial={{opacity:0 , x:-50}}
                  whileInView={{opacity:1 , x:0}}
                  transition={{duration:0.5}}
      
      className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold ">
          <span className="xl:bg-white inline-block mt-3 xl:whitespace-nowrap relative">
            we Provide You</span>
          <span className="text-coral-red"> Super </span> 
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experince, providing you with unmatched quality, innovation and a touch of elegance.
        </p>
        <p className="my-6 info-text lg:max-w-lg"> Our dedication to detail and excellence ensures your satisfaction.</p>
       <div className="mt-11 flex-1 flex justify-start gap-4 items-center">
       <Button label="view details" />
       </div>
      </motion.div>
      <motion.div
                  initial={{opacity:0 , x:50}}
                  whileInView={{opacity:1 , x:0}}
                  transition={{duration:0.7 }}
      
      className="flex-1 flex justify-center items-center">
    <img src={shoe8}  alt="shoe8" height={522} width={570} className="object-container" />
      </motion.div>
    </section>
  )
}

export default SuperQuality