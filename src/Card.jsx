import CardComp from "./subComponents/CardComp"
import { ytChannle } from "./assets/textImport"


function Card() {
    return (
        <div className="flex flex-wrap w-full">
            {ytChannle.map((video, index) => (
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <CardComp
                        key={index}
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
    )
}
export default Card