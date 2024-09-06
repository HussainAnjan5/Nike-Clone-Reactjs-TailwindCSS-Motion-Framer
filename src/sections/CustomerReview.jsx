import { motion } from "framer-motion"
import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReview = () => {
  return (
    <section className="max-container padding-x">
      <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}

      className="font-palanquin text-center text-4xl font-bold">
        What our <span className="text-coral-red">Customers </span> Say ?
      </motion.h3>
      <motion.p 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
      className="info-text m-auto mt-3 text-center max-w-lg">Here geniune stories from our satisfied customers about their expectional experiment with us.</motion.p>
    <div className="flex-1 flex justify-evenly items-center mt-16 max-lg:flex-col gap-24">
    {
      reviews.map((review)=>(
        <ReviewCard
        key={review.customerName}
        imgURL={review.imgURL}
        customerName={review.customerName}
        rating={review.rating}
        feedback={review.feedback}
        
        /> 
           ))
    }
    </div>
    </section>
  )
}

export default CustomerReview