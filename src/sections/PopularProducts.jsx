import { motion } from "framer-motion";
import { star } from "../assets/icons";
import { products } from "../constants/index";

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

const PopularProducts = () => {
  return (
    <section id="products" className="max-container padding-x max-sm:mt-12">
 <motion.div
                     initial={{opacity:0 , x:-50}}
                     whileInView={{opacity:1 , x:0}}
                     transition={{duration:0.5, ease:"easeInOut"}}
 
 className="flex flex-col justify-start gap-5">
 <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="text-slate-gray mt-2 lg:max-w-lg">Experince top-notch quality and style with our sought-after selecttions. Discover a world of comfort, design and value. </p>

 </motion.div>
  <div className="flex justify-center items-center gap-10  mt-16 w-full flex-wrap ">
          {products.map((i) => (
            <motion.div
            variants={Slideleft(i.delay)}
            initial="initial"
              whileInView={"animate"}
  
            
            key={i.label}>
              <img src={i.imgURL} alt="" />
              <div className="">
              </div>
<div className=" mt-8 flex justify-start gap-2">
  <img src={star} alt="star" height={24} width={24} />
<p className="font-montserrat leading-normal text-slate-gray">(4.5)</p>
  </div>              
              <h1 className="mt-2 font-palanquin font-semibold text-2xl leading-normal">{i.name}</h1>
              <span className="mt-2 font-semibold text-coral-red text-2lx font-montserrat leading-normal">{i.price}</span>
            </motion.div>

          ))}
        </div>
    </section>
  )
}

export default PopularProducts