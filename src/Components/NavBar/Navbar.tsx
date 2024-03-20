
import logo from "../../assets/Icon/logo.png";
import profileIcon from "../../assets/Icon/Manav_Shah.jpg"
import setting from "../../assets/Icon/settingIcon.svg"
import bell from "../../assets/Icon/bell.png"
import { useState } from "react";
const Navbar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="grid xxs:grid-cols-12"> 
      <div className="xxs:col-span-3 md:col-span-2 p-3 text-center justify-center items-center sm:flex-col flex">
        <img  className='bg-contain w-40'src={logo} alt="logo"></img>
        <h6 className="text-1xl max-sm:hidden max-md:mt-3">{date.toDateString()}</h6>
      </div>
      <div className="md:col-span-6 max-md:hidden tracking-wide bg-white-400 p-5" >

      <h6 className="text-3xl  font-normal">Welcome Carolina ,</h6>
      <h6 className="text-1x1 font-semibold">Here is a summary of your business</h6>
      </div>
      <div className="xxs:col-span-6 md:col-span-2 justify-center items-center flex gap-8">
      <img src={setting} className="h-10 bg-gray-200  p-3  rounded-2xl" alt="setting"></img>
      <img src={bell} className="h-10 bg-gray-200 p-3 rounded-2xl" alt="bell"></img>
      </div>
      <div className="xxs:col-span-3 md:col-span-2 flex justify-center items-center p-5  space-x-2">

        <img src={profileIcon} className="h-10 rounded-2xl" alt="profileIcon"></img>
        <div className="flex-col">
        <h6 className="text-xl max-lg:text-base font-normal">Carolina John</h6>
      <h6 className="text-xs float-right  font-semibold">cj@examaple.com</h6></div>

             </div>
    </div>
  );
};
export default Navbar;
