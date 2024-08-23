import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import{motion} from "framer-motion";

function Navbar() {
  return (
    <>
    <motion.div className='fixed z-40 top-0 right-0 w-min text-nowrap p-3 bg-paperItem bg-cover bg-no-repeat font-display text-3xl' initial={{ x:200, y:-500 }} animate={{x:0, y:0}} transition={{ delay: 3 }}>
      <Disclosure>
        {({}) => (
          <>
            <div className='flex justify-between items-center sm:hidden'>
              <DisclosureButton className='flex items-center'>
                  <Bars3Icon className='w-8 h-8' />
              </DisclosureButton>
            </div>
            <DisclosurePanel className='fixed inset-0 flex flex-col items-center justify-center sm:hidden bg-paperBackground'>
            <DisclosureButton className=''>
                <XMarkIcon className='absolute top-4 right-4 w-8 h-8' />
              <ul className='text-center'>
                <motion.li whileHover={{ scale: 1.1 }} className='my-4 text-lg'><a href='#'>Isaac Netti</a></motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className='my-4 text-lg'><a href='#projects'>Projects</a></motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className='my-4 text-lg'><a href='#hireMe'>Hire me</a></motion.li>
              </ul>
              </DisclosureButton>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <div className='hidden sm:flex justify-between items-center'>
        <ul className='flex flex-row'>
          <motion.li whileHover={{ scale: 1.1 }} className='mr-3'><a href='#'>Isaac Netti</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className='mr-3'><a href='#projects'>Projects</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} className='mr-5'><a href='#hireMe'>Hire me</a></motion.li>
        </ul>
      </div>
    </motion.div>
    <motion.div className='fixed z-50 top-10 right-10 bg-hand bg-contain bg-no-repeat w-100 h-100 ' animate={{x:[100,0,0,100], y:[-100,-10,-10,100]}} transition={{ delay: 3 }}>
        <p className='p-3'></p>
    </motion.div>
  </>
  );
  
}

export default Navbar;
    
    
    
    
    // <Disclosure as="nav" className="fixed top-0 left-0 right-0 bg-white shadow-md">
    //   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex h-16 items-center justify-between">
    //       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //         {/* Mobile menu button*/}
    //         <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //           <span className="absolute -inset-0.5" />
    //           <span className="sr-only">Open main menu</span>
    //           <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
    //           <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
    //         </DisclosureButton>
    //       </div>
    //       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
    //         <div className="flex flex-shrink-0 items-center">
    //           <h1 className='font-medium animate-pulse'><a href='#'>Isaac Netti</a></h1>
    //         </div>
    //         <div className="hidden sm:ml-6 sm:block">
    //           <div className="flex space-x-4">
    //             {navigation.map((item) => (
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 className={classNames( ' hover:bg-black hover:text-white',
    //                   'rounded-md px-3 py-2 text-sm font-medium',
    //                 )}
    //               >
    //                 {item.name}
    //               </a>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        

    //       </div>
    //     </div>
    //   </div>

    //   <DisclosurePanel className="sm:hidden">
    //     <div className="space-y-1 px-2 pb-3 pt-2">
    //       {navigation.map((item) => (
    //         <DisclosureButton
    //           key={item.name}
    //           as="a"
    //           href={item.href}
    //           className={classNames(
    //              'hover:bg-black hover:text-white',
    //             'block rounded-md px-3 py-2 text-base font-medium',
    //           )}
    //         >
    //           {item.name}
    //         </DisclosureButton>
    //       ))}
    //     </div>
    //   </DisclosurePanel>
    // </Disclosure>