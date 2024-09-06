import { motion } from "framer-motion"
import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName, rating,feedback}) => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}

    className="flex justify-center items-center flex-col">
      <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"  />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex mt-3 items-center justify-center gap-2">
<img src={star} alt="" />
<p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-2 textr-3xl font-montserrat text-center font-bold">{customerName}</h3>
    </motion.div>
  )
}

export default ReviewCard