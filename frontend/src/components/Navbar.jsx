// import React, { useState, useContext } from "react";
// import { assets } from "../assets/assets";
// import logo from "../assets/main_logo.png";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext.jsx";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { token, setToken } = useContext(AppContext);
//   const [showMenu, setShowMenu] = useState(false);

//   const logout = () => {
//     setToken(false);
//     localStorage.removeItem("token");
//   };

//   return (
//     <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
//       <img
//         onClick={() => navigate("/")}
//         className="w-44 cursor-pointer"
//         src={logo}
//         alt="Logo"
//       />
//       <ul className="hidden md:flex items-start gap-5 font-medium">
//         <NavLink to="/" className="nav-link">Home</NavLink>
//         <NavLink to="/doctors" className="nav-link">All Doctors</NavLink>
//         <NavLink to="/my-health" className="nav-link">Health</NavLink>
//         <NavLink to="/my-health-search" className="nav-link">MediView</NavLink>
//         <NavLink to="/my-health-alternative" className="nav-link">Alternate</NavLink>
//         <NavLink to="/about" className="nav-link">About</NavLink>
//         <NavLink to="/contact" className="nav-link">Contact</NavLink>
//       </ul>

//       {/* Emergency Dial Button - Visible on all devices */}
//       <button 
//         onClick={() => window.location.href = "tel:102"}
//         className="relative px-6 py-2 text-lg font-semibold transition-all duration-300 
//         bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full shadow-md 
//         hover:shadow-lg hover:brightness-110 active:scale-95"
//       >
//         🚑 Emergency Dial
//       </button>

//       <div className="flex items-center gap-4">
//         {token ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 h-8 rounded-full" src={assets.profile_pic} alt="Profile" />
//             <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-blue-600 z-20 hidden group-hover:block">
//               <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
//                 <p onClick={() => navigate("my-profile")} className="hover:text-black cursor-pointer">My Profile</p>
//                 <p onClick={() => navigate("my-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
//                 <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-gradient-to-r from-[#0D47A1] to-[#1976D2] text-white px-8 py-3 rounded-full font-light hidden md:block"
//           >
//             Create Account
//           </button>
//         )}

//         <img
//           onClick={() => setShowMenu(true)}
//           className="w-6 md:hidden"
//           src={assets.menu_icon}
//           alt="Menu"
//         />
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
//       >
//         <div className="flex items-center justify-between px-5 py-6">
//           <img className="w-36" src={assets.logo} alt="Logo" />
//           <img className="w-7" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close Menu" />
//         </div>
//         <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
//           <NavLink to="/" className="nav-link" onClick={() => setShowMenu(false)}>Home</NavLink>
//           <NavLink to="/doctors" className="nav-link" onClick={() => setShowMenu(false)}>All Doctors</NavLink>
//           <NavLink to="/my-health" className="nav-link" onClick={() => setShowMenu(false)}>Health</NavLink>
//           <NavLink to="/my-health-search" className="nav-link" onClick={() => setShowMenu(false)}>MediView</NavLink>
//           <NavLink to="/my-health-alternative" className="nav-link" onClick={() => setShowMenu(false)}>Alternate</NavLink>
//           <NavLink to="/about" className="nav-link" onClick={() => setShowMenu(false)}>About</NavLink>
//           <NavLink to="/contact" className="nav-link" onClick={() => setShowMenu(false)}>Contact</NavLink>
//         </ul>

//         {/* Emergency Dial Button in Mobile Menu */}
//         <button 
//           onClick={() => window.location.href = "tel:102"}
//           className="mt-4 px-6 py-2 text-lg font-semibold transition-all duration-300 
//           bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full shadow-md 
//           hover:shadow-lg hover:brightness-110 active:scale-95"
//         >
//           🚑 Emergency Dial
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import logo from "../assets/main_logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={logo}
        alt="Logo"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/doctors" className="nav-link">All Doctors</NavLink>
        <NavLink to="/my-health" className="nav-link">Health</NavLink>
        <NavLink to="/my-health-search" className="nav-link">MediView</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </ul>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Emergency Dial Button - Visible on all devices */}
        <button
          onClick={() => window.location.href = "tel:102"}
          className="relative px-3 py-1 text-sm font-semibold transition-all duration-300 
               bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full shadow-md 
               hover:shadow-lg hover:brightness-110 active:scale-95
               sm:px-5 sm:py-2 sm:text-base
               md:px-6 md:py-2 md:text-lg
               lg:px-8 lg:py-3 lg:text-xl"
        >
          🚑 Emergency Dial
        </button>

        {token ? (
          
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 h-8 rounded-full" src={assets.profile_pic} alt="Profile" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-blue-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate("my-profile")} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate("my-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-[#0D47A1] to-[#1976D2] text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )
        }

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="Menu"
        />
      </div >

      {/* Mobile Menu */}
      < div
        className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img className="w-36" src={logo} alt="Logo" /> 
          <img className="w-7" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close Menu" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink to="/" className="nav-link" onClick={() => setShowMenu(false)}>Home</NavLink>
          <NavLink to="/doctors" className="nav-link" onClick={() => setShowMenu(false)}>All Doctors</NavLink>
          <NavLink to="/my-health" className="nav-link" onClick={() => setShowMenu(false)}>Health</NavLink>
          <NavLink to="/my-health-search" className="nav-link" onClick={() => setShowMenu(false)}>MediView</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setShowMenu(false)}>About</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setShowMenu(false)}>Contact</NavLink>
          <button
            onClick={() => window.location.href = "tel:102"}
            className="mt-4 px-6 py-2 text-lg font-semibold transition-all duration-300 
          bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full shadow-md 
          hover:shadow-lg hover:brightness-110 active:scale-95"
          >
            🚑 Emergency Dial
          </button>
        </ul>
      </div >
    </div >
  );
};

export default Navbar;
