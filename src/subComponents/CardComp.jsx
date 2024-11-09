import { SlOptionsVertical } from "react-icons/sl";
import { FaClock } from "react-icons/fa";

import ytImg from '../test/testImg_01.jpg'

function CardComp(props) {
    return (
        <div className='m-2'>

            <a href="#">
                <div className=''>
                    <div className=''>
                        <img src={props.thumbnailLink} className='rounded-2xl' alt="thumbnail" />
                    </div>

                    <div className='flex gap-2 pt-3'>
                        <div className="w-1/6bg-yellow-300 flex">
                            <img src={props.channleIconLink} className="rounded-full w-10 h-10" alt="thumbnail" />
                        </div>
                        <div className="flex flex-wrap w-5/6 mx-1">
                            <div className="flex w-full justify-between">
                                <h1 className='text-xl font-semibold'>{props.card_title}</h1>
                                <SlOptionsVertical />
                            </div>
                            <h1 className="w-full text-base text-gray-600">{props.channle_name}</h1>
                            <h1 className="w-full text-base text-gray-600">{props.video_views} views {props.video_watch_time} minutes ago</h1>
                        </div>
                    </div>
                </div>

            </a>
        </div>
    )
}

export default CardComp