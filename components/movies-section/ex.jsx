// import React, { useState } from "react";
// import Link from "next/link";
// import { FaPlayCircle, FaTimes, FaBars } from "react-icons/fa";

// import { Transition } from "@headlessui/react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="">
//       <div className="flex h-20 items-center justify-around ">
//         <Link
//           href="/"
//           className="flex items-center gap-3 text-2xl font-bold text-slate-100"
//         >
//           <FaPlayCircle /> BRENTFILMS
//         </Link>

//         <div className="hidden md:block ">
//           <ul className="flex gap-4 text-white text-xl font-bold uppercase">
//             <Link href="/" className="hover:opacity-50">
//               Movies
//             </Link>

//             <Link href="/" className="hover:opacity-50">
//               Series
//             </Link>

//             <Link href="/" className="hover:opacity-50">
//               Kids
//             </Link>
//           </ul>
//         </div>
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsOpen(!isOpen)} type="button" className="">
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//       <Transition
//         show={isOpen}
//         enter="transition ease-out duration-100 transform"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="transition ease-in duration-75 transform"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         <div className="flex md:hidden relative">
//           <ul className="bg-red-500 h-full justify-center items-center w-full flex flex-col right-0 absolute gap-2 text-white text-xl font-bold uppercase space-y-1">
//             <Link href="/">Movies</Link>

//             <Link href="/">Series</Link>

//             <Link href="/">Kids</Link>
//           </ul>
//         </div>
//       </Transition>
//     </nav>
//   );
// };

// export default Header; -->
