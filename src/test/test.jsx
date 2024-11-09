import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { PiQueue } from "react-icons/pi";

function Test() {
    const [hoverTracker, setHoverTracker] = useState(false)

    const handleHoverTracker = () => {
        setHoverTracker(!hoverTracker)
    }

    useEffect(() => {
        console.log(hoverTracker)
    },
        [hoverTracker])

    return (
        <div>

            <div className="m-10 flex justify-end">
                <div className="flex items-center bg-black rounded-lg " onMouseLeave={handleHoverTracker}>
                    <div className={`${(hoverTracker) ? "block" : "hidden"} px-4 text-3xl`}>
                        <h1 className="text-white" >Watch later </h1>
                    </div>
                    <div className="bg-black p-2 rounded-lg text-6xl " onMouseEnter={handleHoverTracker}>
                        <FaClock className="border-2 rounded-full bg-white" />
                    </div>
                </div>
            </div>

            {/* <div className="m-10 flex">
                <div className=" bg-black p-2 rounded-lg">
                    <PiQueue className="text-6xl text-white" />
                </div>
            </div> */}

        </div >
    )
}

export default Test