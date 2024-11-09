import { hightlightsSlides } from "../constants";


export default function VideoCarousel (){

    return (
        <>
            <div className="flex items-center">
                {hightlightsSlides.map ((list, i) => (
                    <div key={list.id} id="slider">
                    <div className="video-carousel_container">
                     test
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}