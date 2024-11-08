import { FaClock } from "react-icons/fa";
import { PiQueue } from "react-icons/pi";

function Test() {
    return (
        <div>

            <div className="m-10 flex">
                <div className=" bg-black p-2 rounded-lg">
                    <FaClock className="text-6xl border-2 rounded-full bg-white" />
                </div>
            </div>

            <div className="m-10 flex">
                <div className=" bg-black p-2 rounded-lg">
                    <PiQueue className="text-6xl text-white" />
                </div>
            </div>

        </div>
    )
}

export default Test