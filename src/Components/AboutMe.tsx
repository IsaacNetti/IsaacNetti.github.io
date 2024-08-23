import{motion} from "framer-motion";

export default function AboutMe() {
    const variants ={
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
        },
        pulse:{
            scale:[1.1,1,1.1],
            transition: {
                duration: 5,
                repeat: Infinity 
            }
        }
    }
    return (
        <>
        <div className='block md:flex flex-row-reverse relative border-black justify-around bg-rippedPaper bg-cover bg-no-repeat md:w-screen h-screen '>
            <div className='flex flex-col md:mt-20 h-3/5 max-w-fit mx-auto md:h-auto md:mx-0 md:mr-24'>
                <motion.div animate="pulse" variants={variants} className='px-32 py-28 bg-mePaper bg-cover bg-no-repeat'></motion.div>
                <div className='flex'>
                    <a href='https://github.com/IsaacNetti'><motion.div animate="hover" variants={variants} className='bg-githubPaper bg-cover bg-no-repeat px-16 py-14'></motion.div></a>
                    <a href='www.linkedin.com/in/inetti'><motion.div animate="hover2" variants={variants} className='bg-linkedInPaper bg-cover bg-no-repeat px-16 py-14 '></motion.div></a>
                </div>
            </div>

            <div className='flex flex-col md:mt-20 border-black md:ml-16'>
                <h1 className=' font-display self-center text-6xl md:self-start md:text-9xl '>Hi, my</h1>
                <h1 className=' font-display self-center text-6xl md:self-start md:text-9xl' >name is <b>Isaac</b></h1>
                <h2 className=' font-display self-center text-4xl'>I'm a React web-developer</h2>
            </div>
        </div>
        </>
    )
}