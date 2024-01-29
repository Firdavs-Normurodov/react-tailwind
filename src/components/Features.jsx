import featuredImg from '../assets/features.png'
import {motion} from "framer-motion"
import {fadeIn} from "../variant"
const Features = () => {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto' id='feature'>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
        <motion.div className='lg:w-2/12'
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        >
          <h3 className='text-3xl text-primary font-bold w-11/12 mb-3'>Why we are better than others</h3>
          <p className='text-base text-tartiary'>
            A simple paragraph is comprised of three major components.
            The first sentence, which is often a declarative sentence,
            is called the “topic sentence.”
          </p>
        </motion.div>
        {/* featured cards */}
        <motion.div className='w-full lg:w-4/5'
        variants={fadeIn("up",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        >
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl
              p-8  flex justify-center items-center hover:-translate-y-4 transition-all
              duration-300
            '>
              <div>
                <img src={featuredImg} alt="#" />
                <h5 className='text-xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>
              </div>
            </div>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl
                p-8  flex justify-center items-center hover:-translate-y-4 transition-all
                duration-300 md:mt-16
            '>
              <div>
                <img src={featuredImg} alt="#" />
                <h5 className='text-xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>
              </div>
            </div>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl
                p-8  flex justify-center items-center hover:-translate-y-4 transition-all
                duration-300
            '>
              <div>
                <img src={featuredImg} alt="#" />
                <h5 className='text-xl font-semibold text-primary px-5 text-center mt-5'>Conventient study schedule</h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;