import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { useRef } from "react";

function Test() {
    const scrollConainterRef = useRef(null)

    const keyWord = [
        "All", "Engine", "Sport Bikes", "React routers",
        "All", "Engine", "Sport Bikes", "React routers",
        "All", "Engine", "Sport Bikes", "React routers",
        "All", "Engine", "Sport Bikes", "React routers",
        "All", "Engine", "Sport Bikes", "React routers"
    ];

    const scrollButton = (count) => {
        if (scrollConainterRef.current) {
            scrollConainterRef.current.scrollBy({
                left: count,
                behavior: 'smooth'
            })
        }
    }

    return (

        <div className="flex items-center ml-2">

            <div className="mr-1">
                <button className="opacity-85 hover:bg-slate-200 rounded-full p-2" onClick={() => { scrollButton(-100) }}><IoIosArrowBack className="text-2xl" /></button>
            </div>

            <div className="flex overflow-hidden gap-1 rounded-lg" ref={scrollConainterRef}>
                {keyWord.map((word, index) => (
                    <button
                        key={index}
                        className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg text-black font-semibold whitespace-nowrap"
                    >
                        {word}
                    </button>
                ))}
            </div>

            <div className="ml-1">
                <button className="opacity-85 hover:bg-slate-200  rounded-full p-2" onClick={() => { scrollButton(100) }}><IoIosArrowForward className="text-2xl" /></button>
            </div>
        </div>
    )
}

export default Test