"use client"

import { useState, useRef, useEffect } from "react";

export default function About() {
  const videoRef = useRef(null); // Reference to the video element
  const progressRef = useRef(null); // Reference to the progress bar
  const [isPlaying, setIsPlaying] = useState(false); // State for play/pause
  const [progress, setProgress] = useState(0); // State for the progress bar
  const [duration, setDuration] = useState(0); // State for video duration

  // Handle play/pause toggle
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Update progress as the video plays
  const updateProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const videoDuration = videoRef.current.duration;
      setProgress((currentTime / videoDuration) * 100); // Update progress bar
    }
  };

  // Update progress bar when dragging
  const handleDrag = (e) => {
    if (progressRef.current && videoRef.current) {
      const width = progressRef.current.offsetWidth;
      const clickPosition = e.nativeEvent.offsetX; // Get the click position
      const newProgress = (clickPosition / width) * 100;
      videoRef.current.currentTime = (newProgress / 100) * videoRef.current.duration; // Seek the video
      setProgress(newProgress);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      // Set the video duration when the video is loaded
      videoRef.current.onloadedmetadata = () => {
        setDuration(videoRef.current.duration);
      };

      // Update the progress when the video is playing
      videoRef.current.ontimeupdate = updateProgress;
    }

    // Cleanup on component unmount
    return () => {
      if (videoRef.current) {
        videoRef.current.onloadedmetadata = null;
        videoRef.current.ontimeupdate = null;
      }
    };
  }, []);

  return (
    <div className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h1 className="section-title">About Shruti's Farm</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="pl-6"> {/* Add left indentation */}
            <p className="text-lg mb-6">
              Nestled in the heart of pristine countryside, Shruti's Farm offers an unparalleled retreat that blends
              rustic charm with modern opulence. Our meticulously restored 19th-century farmhouse stands as a testament
              to timeless elegance, providing guests with a sanctuary of comfort and sophistication.
            </p>
            <p className="text-lg mb-6">
              At Shruti's Farm, we believe in creating unforgettable experiences that reconnect you with nature while
              indulging in the finest amenities. From our farm-to-table dining experiences to our Pool
              facilities, every aspect of your stay is crafted to ensure ultimate relaxation and rejuvenation.
            </p>
            <p className="text-lg">
              Our commitment to sustainability and eco-friendly practices ensures that your luxurious getaway also
              contributes to the preservation of our beautiful surroundings. Immerse yourself in the tranquility of our
              expansive grounds, breathe in the fresh country air, and rediscover the simple pleasures of life in an
              environment of unparalleled comfort.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative h-64 md:h-full min-h-[400px]">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-2xl"
              loop
              muted
            >
              <source src="/images/farm-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Button with ⏸ for play and pause */}
            <button
              onClick={togglePlayPause}
              className="absolute bottom-16 left-10 bg-white text-black p-2 rounded-full shadow-md"
            >
              {isPlaying ? "⏸" : "►"}
            </button>

            {/* Progress Bar */}
            <div
              ref={progressRef}
              onClick={handleDrag}
              className="absolute bottom-4 left-10 right-10 h-1 bg-gray-500 cursor-pointer"
            >
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-green-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
