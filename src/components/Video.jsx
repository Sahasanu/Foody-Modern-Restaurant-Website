import React, { useRef, useState, useEffect } from 'react';
import meal from "../assets/meal.mp4";
import thumbnail from "../assets/thumbnail.png";
import playIcon from "../assets/play.svg";
import pauseIcon from "../assets/pause.svg";

function Video() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const hideTimeout = useRef(null);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }

        setIsPlaying(!isPlaying);
    };

    const scheduleHide = () => {
        clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => {
            setShowControls(false);
        }, 2000);
    };

    const handleMouseEnter = () => {
        setShowControls(true);
        clearTimeout(hideTimeout.current);
    };

    const handleMouseLeave = () => {
        if (isPlaying) {
            scheduleHide();
        }
    };

    useEffect(() => {
        if (isPlaying) {
            scheduleHide();
        } else {
            clearTimeout(hideTimeout.current);
            setShowControls(true);
        }
    }, [isPlaying]);

    return (
        <div
            className="videocontainer relative w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='video w-[98%] ml-auto mr-auto'>
                <video ref={videoRef} src={meal} loop poster={thumbnail} controls={false} className="w-full" /></div>
            {showControls && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-black bg-opacity-50 rounded-full w-[50px] h-[50px] flex items-center justify-center transition-opacity duration-300"
                    onClick={togglePlayPause}>
                    <img
                        src={isPlaying ? pauseIcon : playIcon} alt="play-pause" className="w-[30px]" />
                </div>
            )}
        </div>
    );
}

export default Video;
