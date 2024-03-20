
import Dashboard from "../../assets/Icon/DashBoard.png"
import { mainMenu,more } from "../../Constant/constant";
const Menu = () => {
  return (
    <>
    <div className="p-3">
    <span className="text-base font-bold text-white">Main Menu</span>
    {mainMenu.map((menuItem: any,index:number) => {
        return (
          <>
          <div key={index} className="flex mt-2 mb-2 px-1  items-center justify-start rounded-2xl">
             <img alt="imageh" className="h-5 mt-2 xxs:max-md:hidden  text-white"src={Dashboard}></img>
            <span className="md:font-bold sm:max-md:text-sm text-white text-sm  p-4">{menuItem.name}</span>
        </div>
          </>
        );
      })}
       <span className="text-base font-bold mt-7 text-white">More</span>
       
<div className="pt-2 px-3">
    <label htmlFor="default-search" className="mb-2 text-sm  font-medium  text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Student by name" required />
      
    </div>

    </div>
       {more.map((menuItem: any,index:number) => {
        return (
          <>
          <div key={index} className="flex mt-4 px-3  justify-start rounded-2xl">
             <img alt="imageh" className="h-5 mt-4 xxs:max-md:hidden text-white"src={Dashboard}></img>
            <span className="md:font-bold sm:max-md:text-sm text-white text-sm  p-4">{menuItem.name}</span>
        </div>
          </>
        );
      })}
    </div>
</>
  );
};

export default Menu;
