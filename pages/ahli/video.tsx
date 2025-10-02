import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource("/videos/master.m3u8"); // HLS manifest from ffmpeg
        hls.attachMedia(videoRef.current);
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = "/videos/master.m3u8"; // Safari fallback
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-2xl font-bold mb-4">Test HLS Streaming</h1>
      <video ref={videoRef} controls width="640" />
    </div>
  );
}
