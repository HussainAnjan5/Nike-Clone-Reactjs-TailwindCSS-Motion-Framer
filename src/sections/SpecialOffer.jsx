import { motion } from "framer-motion"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex padding-x justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <motion.div
          initial={{opacity:0 , x:-50}}
          whileInView={{opacity:1 , x:0}}
          transition={{duration:0.8}}
      
      className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
      </motion.div>
      <div>
      <motion.div
          initial={{opacity:0 , x:50}}
          whileInView={{opacity:1 , x:0}}
          transition={{duration:0.8}}
      
      className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold ">
          Special 
          <span className="text-coral-red"> Offer </span> 
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
         Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalled value that sets us apart.
        </p>
        <p className="my-6 info-text lg:max-w-lg"> Navigate a realm of possibiltties designed to fulfill your unique desires, surpassing the lofitties expectations. Your journey with us is nothing short of execptional.</p>
        <div className="mt-11 flex-1 flex justify-start gap-4 items-center">
        <Button label="Shop Now" iconURL={arrowRight} />
        <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slatte-gray" textColor="text-slate-gray"/>

        </div>
      </motion.div>
      <div className="flex-1 flex justify-center items-center">
      </div>
      </div>
    </section>
  )
}

export default SpecialOffer