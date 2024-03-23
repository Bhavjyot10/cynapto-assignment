import React from 'react';
import './RecentVideos.css';
import video1 from '../videos/vid1.mp4';
import video2 from '../videos/vid2.mp4';
import video3 from '../videos/vid3.mp4';

function RecentVideos() {
    return (
        <div className="RecentVideos">
            <span className="SectionHeading"> <b> Recent Videos </b> </span>
            <div className="VideosSection">

                <div className="Video">
                    <video width="320" height="240" controls>
                        <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <span> Video 1 </span>
                </div>

                <div className="Video">
                    <video width="320" height="240" controls>
                        <source src={video2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <span> Video 2 </span>
                </div>

                <div className="Video">
                    <video width="320" height="240" controls>
                        <source src={video3} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                    <span> Video 3 </span>
                </div>

            </div>

        </div>
    );
}

export default RecentVideos;