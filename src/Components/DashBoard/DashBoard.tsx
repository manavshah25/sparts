import React, { useState } from "react";
import NavBar from "../NavBar/Navbar";
import Menu from "../Menu/Menu";
import iconMenu from "../../assets/Icon/menu.svg";
import logo from "../../assets/Icon/logo.png";
import profileIcon from "../../assets/Icon/Manav_Shah.jpg";
import setting from "../../assets/Icon/settingIcon.svg";
import bell from "../../assets/Icon/bell.png";
import BarAnimation from "../Chart/BarAnimation";
import filter from "../../assets/Icon/filter.png";
import threeDot from "../../assets/Icon/threeDot.png";
import {dataX,dataXtwo,schedule} from "../../Constant/constant";

const DashBoard = () => {
  const [date, setDate] = useState(new Date()); 
  return (
    <>
      <div className="grid">
        <NavBar />
        <div className="grid grid-cols-12">
          <div className="xxs:max-lg:hidden col-span-2 h-[100%] bg-primary-dark-green">
            <Menu />
          </div>
          <div className="xxs:max-lg:col-span-12 col-span-10 h-[100%] bg-gray-200">
            <div className="grid p-3  grid-cols-12 gap-2">
              <div className="xxs:max-lg:col-span-12 col-span-6 drop-shadow-md h-[100%] rounded-md bg-gray-100">
                {/* <div className="grid grid-cols-12 p-2"> */}
                <div className="flex justify-between items-center p-4">
                  <div className="grid items-center justify-center">
                    <span className="text-sm text-gray-back">
                      Active Students
                    </span>
                    <hr className="bg-gray-300 m-2 h-[1.2px]"></hr>
                    <span className="text-base font-semibold">5,000</span>
                  </div>
                  <hr className="flex w-8"></hr>
                  <div className="grid">
                    {/* <div className="col-span-6"> */}
                    <span className="text-sm text-gray-back">
                      Active Coahes
                    </span>
                    <hr className="bg-gray-300 m-2 h-[1.2px]"></hr>
                    <span className="text-base font-semibold">5</span>
                  </div>
                </div>

                {/* </div> */}
              </div>
              <div className="xxs:max-lg:col-span-12 col-span-6 rounded-md drop-shadow-md h-[100%] bg-gray-100">
                <div className="flex justify-between items-center p-4">
                  <div className="grid items-center justify-center">
                    <span className="text-sm text-gray-back divide-y">
                      Estimated Revenue Potential for this month
                    </span>
                    <hr className="bg-gray-300 m-2 h-[1.2px]"></hr>
                    <span className="bg-primary-dark-green mt-1 w-[100%] rounded-md text-primary-dark-green font-semibold">
                      5
                    </span>
                  </div>
                  {/* <hr className="flex w-8"></hr> */}
                  <div className="grid">
                    {/* <div className="col-span-6"> */}
                    <span className="text-xl font-semibold">&#8377; 10 L</span>
                    <hr className="bg-gray-300 m-2 h-[1.2px]"></hr>
                    <span className="bg-primary-dark-green mt-1  rounded-md  text-primary-dark-green font-semibold">
                      5
                    </span>
                  </div>
                </div>
              </div>
              <div className="xxs:col-span-12 p-4 drop-shadow-md flex justify-evenly items-center h-[100%] rounded-md bg-gray-100">
              <div className="w-[50%]">
                {" "}
                <BarAnimation dataX={dataX} value={true} />
              </div>
              <hr className="bg-gray-300 align-middle"></hr>
              <div className="w-[50%]">
                {" "}
                <BarAnimation dataX={dataXtwo} value={false} />
              </div>
              </div>
              <div className="xxs:col-span-12 drop-shadow-md h-[100%] p-5 rounded-md bg-gray-100">
                {/* <div className="grid grid-cols-12 p-2"> */}
                <div className="flex justify-around items-center">
                  <div className="font-semibold">
                    <span>Upcoming Schdule</span>
                  </div>
                  <div className="flex xxs:max-md:hidden gap-3 items-center">
                    <img className="h-6" alt="filter" src={filter}></img>
                    <span className="bg-primary-dark-green rounded-lg p-1 px-9 text-white">
                      ALL
                    </span>
                    <span className="bg-primary-dark-green  rounded-lg p-1 px-9 text-white">
                      Classes
                    </span>
                    <span className="bg-primary-dark-green  rounded-lg p-1 px-9 text-white">
                      Meetings
                    </span>
                    <span className="bg-primary-dark-green  rounded-lg p-1 px-9 text-white">
                      Events
                    </span>
                  </div>
                  <div>
                    <img className="h-5" alt="filter" src={threeDot}></img>
                  </div>
                </div>
                <hr className="bg-gray-300 mt-4 h-[1.3px]"></hr>
              
              <div className="grid gap-5 p-4 items-start">
                  {schedule.map((data, index) => {
                    return (
                      <>
                         <div key={index} className="flex justify-between items-start">
                        
                        <span className="xxs:max-md:text-xs text-black flex gap-2"> <img src={bell} className="h-8  bg-gray-200 p-2  rounded-2xl" alt="bell"></img> {data.date}</span>
                        <span className="xxs:max-md:text-xs text-black">{data.time}</span>
                        <span className="xxs:max-md:text-xs text-black">{data.title}</span>
                        <span className="xxs:max-md:text-xs text-blue-500">{data.action}</span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
