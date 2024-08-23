import { motion } from "framer-motion"

export default function HireMe(){
    const variants ={
        place:{
            x:-50,
        }, 
        
        hover:{
            y: [-5,5,-5],
            x: [-2,2,-1,-2],
            transition: {
                duration: 5,
                repeat: Infinity 
            }
        }
    }
    return(
        <>
         <div id="hireMe" className=' font-display flex flex-col justify-center bg-rippedPaperBottom bg-cover bg-no-repeat w-screen h-screen '>
            <div className=" flex justify-around">
                <h1 className="mt-28 sm:text-4xl">Email: isaacnetti@gmail.com</h1>
                <h1 className="mt-28 sm:text-4xl">LinkedIn: linkedin.com/in/inetti </h1>
            </div>

            <a href="mailto:isaacnetti@gmail.com?subject=I'd like to work with you!?body=Hello! I have a job opportunity that I think you would be great for"><motion.div animate="hover" variants={variants} className="mt-10 bg-hireMePaper bg-contain bg-no-repeat w-56 h-56 mx-auto"></motion.div></a>
            <motion.div className="bg-stickyNote2 bg-contain bg-no-repeat w-36 h-36 mx-auto" animate="place" variants={variants}></motion.div>
         </div>
        </>
    )
}