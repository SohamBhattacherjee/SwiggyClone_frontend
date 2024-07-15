import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";

export default function Header() {
    const [toggle,setToggle] = useState(false);
    const showSideMenu = () => {
        setToggle(true);
    }
    const hideSideMenu = () => {
        setToggle(false);
    }
    const links = [
            {
                icon: <IoSearch />,
                name: "Search"
            },
            {
                icon: <RiDiscountPercentLine />,
                name: "Offers",
                sup: "New"
            },
            {
                icon: "",
                name: "Help"
            },
            {
                icon: "",
                name: "Sign In"
            },
            {
                icon: "",
                name: "Cart",
                sup: 2
            }

    ]
    return (
        <>
        <div className='black-overlay w-full h-full fixed duration-500 z-[9999]' onClick={hideSideMenu} style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle? "visible" : "hidden"
        }}>
            <div className='w-[500px] bg-white h-full absolute duration-[400ms]' 
                style={{
                    left: toggle? '0%' : '-100%'
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    showSideMenu(); // Call the function you want to run
                }}
                ></div>
        </div>

            <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
                <div className="max-w-[1200px] mx-auto border flex items-center">
                    <div className="w-[100px] ">
                        <img src="images/logo.png" className="w-full" alt="" />
                    </div>
                    <div className=''>
                        <span className="font-bold border-b-[3px]">Ratanda</span> Jodhpur,
                        Rajasthan, India <RxCaretDown fontSize = {25} className='inline text-[#fc8019] cursor-pointer'
                        onClick={showSideMenu}/>
                    </div>
                    <nav className="hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold">
                       
                        {
                            links.map(
                                (link, index) => {
                                    return <li key={index} className=" cursor-pointer flex hover:text-[#fc8019] items-center gap-2" >
                                            {link.icon}
                                            {link.name}
                                            <sup>{link.sup}</sup>
                                        </li>
                                       
                                    
                                }
                            )
                        }
                       
                    </nav>

                </div>
            </header>
        </>
    )
}
