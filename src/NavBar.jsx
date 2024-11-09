import { IoIosSearch } from "react-icons/io";

function NavBar() {
    return (
        <div className="my-2 mx-1 md:mx-0">

            <div className="flex flex-wrap items-center border rounded-full px-4 py-2 max-w-sm md:max-w-md mx-auto">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-grow outline-none px-2 text-gray-700"
                />
                <button className="border-l-2 text-2xl pl-2"><IoIosSearch /></button>
            </div>

        </div>
    )
}

export default NavBar