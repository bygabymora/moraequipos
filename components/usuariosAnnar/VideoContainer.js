import React, { useEffect, useRef, useState } from 'react';
import RootLayout from '../../components/layout';

import { FaCirclePlay } from 'react-icons/fa6';

const VideoContainer = ({ setShowButton, setShowButton2 }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current
          .play()
          .then(() => {
            requestFullScreen(videoRef.current);
          })
          .catch((err) => {
            console.error('Error trying to play the video: ', err);
          });
      }
    }
  };

  const requestFullScreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen().catch((err) => {
        console.error('Error trying to enable fullscreen: ', err);
      });
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen().catch((err) => {
        console.error('Error trying to enable fullscreen on Safari: ', err);
      });
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen().catch((err) => {
        console.error('Error trying to enable fullscreen on IE11: ', err);
      });
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      exitFullScreen();
      setIsPlaying(false);
    };

    const timeUpdateHandler = () => {
      if (videoElement.currentTime >= 95) {
        setShowButton(true);
      }
      if (videoElement.currentTime >= 35) {
        setShowButton2(true);
      }
    };

    if (videoElement) {
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);
      videoElement.addEventListener('ended', handleEnded);
      videoElement.addEventListener('timeupdate', timeUpdateHandler);

      return () => {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
        videoElement.removeEventListener('ended', handleEnded);
        videoElement.removeEventListener('timeupdate', timeUpdateHandler);
      };
    }
  }, [setShowButton]);

  return (
    <RootLayout title="moraequipos">
      <main className="flex flex-col items-center justify-center h-auto md:h-[75vh] lg:h-[80vh] mt-10 md:mt-5">
        <div className="flex justify-center items-center leading-tight max-w-xl mx-auto w-full pt-2 px-2 relative lg:max-w-4xl">
          <video
            ref={videoRef}
            id="propuestaComercial2024"
            className="2xl:w-full h-auto rounded-lg shadow-xl w-[90%] lg:w-[80%]"
            volume="0.8"
            controls
          >
            <source
              src="/videos/usuariosAnnar/videoUsuarios.mp4"
              type="video/mp4"
            />
          </video>
          {!isPlaying && (
            <FaCirclePlay
              className="absolute top-1/2 left-1/2 hidden md:block  transform -translate-x-1/2 -translate-y-1/2 text-[10rem] text-[#8b1414] cursor-pointer opacity-70 md:text-[5rem] lg:text-[10rem]"
              onClick={togglePlay}
            />
          )}
        </div>
      </main>
    </RootLayout>
  );
};

export default VideoContainer;
