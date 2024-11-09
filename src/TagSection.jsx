import { useRef } from "react";
import { FaYoutube } from "react-icons/fa";

function TagSection() {
    const keyWord = [
        "All", "Engine", "Sport Bikes", "React routers",
        "All", "Engine", "Sport Bikes", "React routers",
        "All", "Engine", "Sport Bikes", "React routers",
        "All", "Engine", "Sport Bikes", "React routers",
        "All", "Engine", "Sport Bikes", "React routers"
    ];

    // Reference for the container that holds the buttons
    const scrollContainerRef = useRef(null);

    // Function to scroll left
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200, // Scroll left by 200px
                behavior: 'smooth',
            });
        }
    };

    // Function to scroll right
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200, // Scroll right by 200px
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="">
            <div className="relative">
                {/* Scroll Buttons */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-2 py-1 rounded-full"
                >
                    &#8592; {/* Left arrow */}
                </button>

                {/* Button container */}
                <div
                    ref={scrollContainerRef}
                    className="flex py-2 space-x-2 overflow-hidden"
                >
                    {keyWord.map((word, index) => (
                        <button
                            key={index}
                            className="bg-gray-200 px-3 py-1 rounded-lg text-black font-semibold whitespace-nowrap"
                        >
                            {word}
                        </button>
                    ))}
                </div>

                {/* Scroll Buttons */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-2 py-1 rounded-full"
                >
                    &#8594; {/* Right arrow */}
                </button>
            </div>
        </div>
    );
}

export default TagSection;
