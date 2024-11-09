import { FaHistory } from "react-icons/fa";
import { PiQueueBold } from "react-icons/pi";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import { GrChannel } from "react-icons/gr";
import { IoMdTrendingUp } from "react-icons/io";
import { LuMusic4 } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { GrAchievement } from "react-icons/gr";

import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";

function SideMenu() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="mr-2">

            <div className="border-b pb-5 space-y-1">
                <h1 className="bg-gray-100 font-semibold rounded-lg px-3 py-2">Home</h1>
                <h1 className="hover:bg-gray-100 font-normal rounded-lg px-3 py-2">Shorts</h1>
                <h1 className="hover:bg-gray-100 font-normal rounded-lg px-3 py-2">Subcription</h1>
            </div>

            <div className="border-b py-5">
                <h1 className="flex items-center gap-4 font-semibold rounded-lg px-3 py-2">You <IoIosArrowForward /></h1>
                <div>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><FaHistory className="text-xl" />History</h1>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><PiQueueBold className="text-xl" />Playlists</h1>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><GoVideo className="text-xl" />Your Videos</h1>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><MdOutlineWatchLater className="text-2xl" />Watch later</h1>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2" ><AiOutlineLike className="text-xl" />Liked videos</h1>
                </div>
            </div>

            <div className="border-b py-5">
                <h1 className="items-center gap-4 font-semibold rounded-lg px-3 py-2">Subcriptions</h1>
                <div>
                    <div className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2">
                        <div className="border-2 rounded-full p-1 border-black">
                            <GrChannel className="" />
                        </div>
                        <h1>Channle_01</h1>
                    </div>

                    <div className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2">
                        <div className="border-2 rounded-full p-1 border-black">
                            <GrChannel className="" />
                        </div>
                        <h1>Channle_02</h1>
                    </div>

                    <div className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2">
                        <div className="border-2 rounded-full p-1 border-black">
                            <GrChannel className="" />
                        </div>
                        <h1>Channle_03</h1>
                    </div>
                </div>
            </div>

            <div className="border-b py-5">
                <h1 className="items-center gap-4 font-semibold rounded-lg px-3 py-2">Exlore</h1>
                <div>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><IoMdTrendingUp className="text-xl" />Trending</h1>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"> <LuMusic4 className="text-xl" />Music</h1>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><IoGameControllerOutline className="text-xl" />Gaming</h1>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><GrAchievement className="text-xl" />Sports</h1>
                </div>
            </div>

            <div className="border-b py-5">
                <h1 className="items-center gap-4 font-semibold rounded-lg px-3 py-2">More from YouTube</h1>
                <div>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><FaYoutube className="text-2xl text-red-500" />YouTube Premium</h1>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><SiYoutubestudio className="text-2xl text-red-500" />YouTube Studio</h1>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><SiYoutubemusic className="text-2xl text-red-500" />YouTube Music</h1>
                    <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2"><SiYoutubekids className="text-2xl text-red-500" />YouTube Kids</h1>
                </div>
            </div>

            <div className="border-b py-5">
                <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2">
                    <IoSettingsOutline className="text-2xl" />
                    Settings
                </h1>
                <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2">
                    <MdOutlinedFlag className="text-2xl" />
                    Report history
                </h1>
                <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2">
                    <MdHelpOutline className="text-2xl" />
                    Help
                </h1>
                <h1 className="flex items-center gap-4 hover:bg-gray-100 font-normal rounded-lg px-3 py-2">
                    <MdOutlineFeedback className="text-2xl" />
                    Send feedback
                </h1>
            </div>

            <div className="py-5">
                <p className="text-gray-500 text-sm font-semibold pb-2">About Press Copyright Contact us Creators Advertise Developers</p>
                <p className="text-gray-500 text-sm font-semibold pb-2">Terms Privacy Policy & Safety How YouTube works Test new features</p>
                <div className="text-gray-400 pt-2">
                    <h1>@ {currentYear} Google LLC</h1>
                </div>
            </div>

        </div>
    )
}

export default SideMenu