import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { MdMic } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { BsCameraReels } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

function NavBar() {
    const [showNotification, setShowNotification] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showVoiceSearch, setShowVoiceSearch] = useState(false);

    return (
        <div className="flex flex-wrap justify-between my-2 px-2 py-2">
            {/* yt logo */}
            <div className="flex items-center gap-6">
                <CiMenuBurger className="text-2xl" />
                <div className="flex items-center font-bold text-2xl tracking-tighter">
                    <FaYoutube className="text-3xl text-red-600" />
                    <h1>YouTube</h1>
                </div>
            </div>

            {/* Search Section */}
            <div className="flex items-center">
                <div className="flex bg-white border rounded-full px-4 py-2 w-[650px]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-grow outline-none px-2 text-gray-700"
                    />

                    {/* Search Icon */}
                    <div>
                        <div
                            className="border-l-2 pl-2"
                            onMouseEnter={() => setShowSearch(true)}   // Show "Search" text on hover
                            onMouseLeave={() => setShowSearch(false)}  // Hide "Search" text when not hovering
                        >
                            <IoIosSearch className="text-2xl" />
                        </div>

                        <div
                            className={`flex justify-center transition-opacity duration-200 ${showSearch ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <h1 className="bg-gray-600 bg-opacity-90 absolute text-sm rounded-lg text-white px-2 py-1 mt-6">
                                Search
                            </h1>
                        </div>
                    </div>

                </div>

                {/* voice search icon with transition */}
                <div className="ml-5">
                    <div
                        className="bg-gray-200 p-3 rounded-full"
                        onMouseEnter={() => setShowVoiceSearch(true)}   // Show text on hover
                        onMouseLeave={() => setShowVoiceSearch(false)}  // Hide text when not hovering
                    >
                        <MdMic className="text-2xl" />
                    </div>

                    <div
                        className={`flex justify-center transition-opacity duration-200 ${showVoiceSearch ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <h1 className=" bg-gray-600 bg-opacity-90 absolute text-sm rounded-lg text-white px-2 py-1 mt-3">
                            Search with voice
                        </h1>
                    </div>
                </div>


            </div>

            {/* Control Section */}
            <div className="flex  items-center  gap-12 text-xl">

                {/* create icon with transition */}
                <div>
                    <div
                        className="hover:bg-gray-200 p-3 rounded-full"
                        onMouseEnter={() => setShowCreate(true)}   // Show text on hover
                        onMouseLeave={() => setShowCreate(false)}  // Hide text when not hovering
                    >
                        <BsCameraReels />
                    </div>

                    <div
                        className={`flex justify-center transition-opacity duration-200 ${showCreate ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <h1 className="bg-gray-600 bg-opacity-90 absolute text-sm rounded-lg text-white px-2 py-1 mt-3">
                            Create
                        </h1>
                    </div>
                </div>

                {/* notification icon with transition*/}
                <div>
                    <div
                        className="hover:bg-gray-200 p-3 rounded-full"
                        onMouseEnter={() => setShowNotification(true)}
                        onMouseLeave={() => setShowNotification(false)}
                    >
                        <VscBell />
                    </div>

                    <div
                        className={`flex justify-center transition-opacity duration-200 ${showNotification ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <h1 className="bg-gray-600 bg-opacity-90 absolute text-sm rounded-lg text-white px-2 py-1 mt-3">
                            Notifications
                        </h1>
                    </div>
                </div>

                <div>
                    <div className="hover:bg-gray-200 p-3 rounded-full">
                        <CgProfile />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar