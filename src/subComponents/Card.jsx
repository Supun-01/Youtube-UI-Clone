import { SlOptionsVertical } from "react-icons/sl";
import { FaClock } from "react-icons/fa";

import ytImg from '../test/testImg_01.jpg'

function Card() {
    return (
        <div className='m-10'>

            <a href="#">
                <div className='max-w-sm'>
                    <div className=''>
                        <img src={ytImg} className='rounded-2xl' alt="thumbnail" />
                    </div>

                    <div className='flex gap-2 pt-3'>
                        <div className="w-1/6bg-yellow-300 flex">
                            <img src={ytImg} className="rounded-full w-10 h-10" alt="thumbnail" />
                        </div>
                        <div className="flex flex-wrap w-5/6 mx-1">
                            <div className="flex w-full justify-between">
                                <h1 className='text-xl font-semibold'>Video Title</h1>
                                <SlOptionsVertical />
                            </div>
                            <h1 className="w-full text-base text-gray-600">Channle Name</h1>
                            <h1 className="w-full text-base text-gray-600">6.4k views 38 minutes ago</h1>
                        </div>
                    </div>
                </div>

            </a>
        </div>
    )
}

export default Card