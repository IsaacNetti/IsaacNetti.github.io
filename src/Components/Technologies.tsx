import{motion} from "framer-motion";
import { useRef } from "react";


export default function Technologies() {
    const variants ={
        place:{
            y:-10,
            rotate:-5,
            transition: {
                
            }
        }, 
        hover2:{
            y: [5,-5,5],
            x: [-2,2,-1,-2],
            transition: {
                duration: 5,
                repeat: Infinity 
            }
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
    const parentRef = useRef(null)
    return (
        <>
        <div ref={parentRef}className=''>
            <motion.ul className='flex justify-around h-52'>
                <motion.li drag dragConstraints={parentRef} animate="hover" variants={variants} className=' self-center bg-htmlPaper bg-contain bg-no-repeat px-14 py-14'></motion.li>
                <motion.li drag dragConstraints={parentRef} animate="hover2" variants={variants} className=' self-center bg-cssPaper bg-contain bg-no-repeat px-14 py-14'></motion.li>
                <motion.li drag dragConstraints={parentRef} animate="hover" variants={variants} className=' self-center bg-jsPaper bg-contain bg-no-repeat px-14 py-14'></motion.li>
                <motion.li drag dragConstraints={parentRef} animate="hover2" variants={variants} className=' self-center bg-reactPaper bg-contain bg-no-repeat px-14 py-14'></motion.li>
                <motion.li drag dragConstraints={parentRef} animate="hover" variants={variants} className=' self-center bg-sqlPaper bg-contain bg-no-repeat px-14 py-14'></motion.li>
            </motion.ul>
            <motion.div drag dragConstraints={parentRef} animate="place" variants={variants} className='w-min ml-5 bg-stickyNote bg-contain bg-no-repeat px-14 py-14'></motion.div>
        </div>
        </>
    )
}