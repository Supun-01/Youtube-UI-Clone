import CardComp from "./subComponents/CardComp"
import { ytChannle } from "./assets/textImport"
import TagSection from "./TagSection"


function Card() {
    return (
        <div>
            {/* <div className="">
                <TagSection />
            </div> */}
            <div className="flex flex-wrap w-full">
                {ytChannle.map((video, index) => (
                    <div key={index} className="w-full md:w-1/3 lg:w-1/4">
                        <CardComp
                            card_title={video.cardTitle}
                            channle_name={video.channleName}
                            video_views={video.videoViews}
                            video_watch_time={video.videoWatchTime}
                            channleIconLink={video.channleIconLink}
                            thumbnailLink={video.thumbnailLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Card