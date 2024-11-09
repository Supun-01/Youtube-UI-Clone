import { IoIosSearch } from "react-icons/io";
import { MdMic } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { BsCameraReels } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

function NavBar() {
    return (
        <div className="flex flex-wrap justify-between my-2 px-2">

            <div className="flex items-center gap-6">
                <CiMenuBurger className="text-2xl" />
                <div className="flex items-center font-bold text-2xl tracking-tighter">
                    <FaYoutube className="text-3xl text-red-600" />
                    <h1>YouTube</h1>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex bg-white border rounded-full px-4 py-2 w-[650px]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-grow outline-none px-2 text-gray-700"
                    />
                    <button className="border-l-2 text-2xl pl-2"><IoIosSearch /></button>
                </div>
                <div className="bg-gray-200 p-2 rounded-full ml-5">
                    <MdMic className="text-2xl" />
                </div>
            </div>

            <div className="flex  items-center  gap-12 text-2xl">
                <BsCameraReels />
                <VscBell />
                <CgProfile />
            </div>

        </div>
    )
}

export default NavBar