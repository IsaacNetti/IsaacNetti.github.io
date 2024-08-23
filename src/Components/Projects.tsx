import{motion} from "framer-motion";

export default function Projects() {

    return(
        <>
        <p id="projects" className=" font-display w-min text-nowrap mx-auto text-6xl mt-10">Projects</p>
        <div className='lg:flex justify-around font-display'>
            <a href="https://github.com/SCCapstone">
            <motion.div whileHover={{scale:1.1}} className='bg-paperProject bg-contain bg-no-repeat p-1 m-auto h-96 min-w-80 max-w-80 md:w-1/3'>
                <h2 className="w-min ml-28 mt-10 text-xl">FishFinder</h2>
                <img src="images\fishFinder.jpeg" alt="" className=" border-4 border-black ml-20 w-36"/>
                <p className="ml-14 mr-14 ">A social media app made for my college capstone project. My focus was the two way real time messaging system.</p>
            </motion.div>
            </a>

            <a href="https://isaacnetti.github.io/ReactToDoApp/">
            <motion.div whileHover={{scale:1.1}} className='bg-paperProject bg-contain bg-no-repeat p-1 m-auto h-96 min-w-80 max-w-80 md:w-1/3'>
                <h2 className="w-min ml-16 text-nowrap mt-14 text-xl">Pokemon Capture Tracker</h2>
                <img src="images\pokemonTracker.png" alt="" className=" border-4 border-black ml-12 mt-3 w-52"/>
                <p className="ml-14 mr-14 mt-6 ">A simple React based tracker with persistant storage</p>
            </motion.div>
            </a>

            <a href="#">
            <motion.div whileHover={{scale:1.1}} className='bg-paperProject bg-contain bg-no-repeat p-1 m-auto h-96 min-w-80 max-w-80 md:w-1/3'>
                <h2 className="w-min ml-24 mt-14 text-xl text-nowrap">This Website</h2>
                <img src="images\websiteThumbnail.png" alt="" className=" border-4 border-black ml-12 w-52 mt-2"/>
                <p className="ml-16 mr-14 mt-5">A React based website with animations, interactivity, and a cohesive theme</p>
            </motion.div>
            </a>
            
        </div>
        <a href="https://isaacnetti.github.io/projects.html"><motion.p whileHover={{scale:1.1}} className=" font-display w-min text-nowrap m-auto text-4xl">See all</motion.p></a>
        </>
    )
}