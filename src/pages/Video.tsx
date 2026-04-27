"use client";

import { useState } from "react";
import {
  Video as VideoIcon,
  PhoneOff,
  Mic,
  MicOff,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Video() {
  const [inCall, setInCall] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [screenShare, setScreenShare] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-lg p-6"
      >

        {/* HEADER */}
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          Video Calling Room
        </h1>

        {/* VIDEO AREA */}
        <div className="grid grid-cols-2 gap-4 mb-6">

          {/* USER SCREEN */}
          <div className="bg-gray-100 rounded-xl h-72 flex flex-col items-center justify-center text-gray-500">
            <VideoIcon className="mb-2" />

            {videoOn ? "Your Camera On" : "Camera Off"}
          </div>

          {/* PEER SCREEN */}
          <div className="bg-gray-100 rounded-xl h-72 flex flex-col items-center justify-center text-gray-500">
            Participant
          </div>

        </div>

        {/* STATUS */}
        <div className="mb-4 text-sm text-gray-600 flex gap-4">
          <span>Mic: {micOn ? "On" : "Off"}</span>
          <span>Video: {videoOn ? "On" : "Off"}</span>
          <span>Screen: {screenShare ? "Sharing" : "Off"}</span>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-center gap-4">

          {/* CALL */}
          <button
            onClick={() => setInCall(!inCall)}
            className={`px-5 py-2 rounded-lg text-white flex items-center gap-2 ${
              inCall ? "bg-red-500" : "bg-green-500"
            }`}
          >
            <PhoneOff size={18} />
            {inCall ? "End Call" : "Start Call"}
          </button>

          {/* MIC */}
          <button
            onClick={() => setMicOn(!micOn)}
            className={`p-3 rounded-lg ${
              micOn ? "bg-gray-100" : "bg-red-100"
            }`}
          >
            {micOn ? <Mic /> : <MicOff />}
          </button>

          {/* VIDEO TOGGLE */}
          <button
            onClick={() => setVideoOn(!videoOn)}
            className={`p-3 rounded-lg ${
              videoOn ? "bg-gray-100" : "bg-red-100"
            }`}
          >
            <VideoIcon />
          </button>

          {/* SCREEN SHARE */}
          <button
            onClick={() => setScreenShare(!screenShare)}
            className={`p-3 rounded-lg ${
              screenShare ? "bg-blue-100" : "bg-gray-100"
            }`}
          >
            <Monitor />
          </button>

        </div>
      </motion.div>
    </div>
  );
}