"use client";

import { useRef, useState } from "react";
import { Upload, PenTool } from "lucide-react";
import { motion } from "framer-motion";

// 🔥 Proper type (no any needed)
type Status = "Draft" | "In Review" | "Signed";

export default function Docs() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("Draft");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);

  // Upload file handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  // Signature start
  const startDraw = () => {
    isDrawing.current = true;
  };

  const endDraw = () => {
    isDrawing.current = false;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#111";

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-lg p-6"
      >

        {/* HEADER */}
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Document Chamber
        </h1>

        {/* STATUS */}
        <div className="mb-4">
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as Status)
            }
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
          >
            <option>Draft</option>
            <option>In Review</option>
            <option>Signed</option>
          </select>

          <span className="ml-3 text-sm text-gray-600">
            Current: {status}
          </span>
        </div>

        {/* UPLOAD */}
        <label className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition mb-6">
          <Upload className="text-gray-500 mb-2" />
          <p className="text-gray-600">
            {fileName ? fileName : "Upload PDF / Document"}
          </p>

          <input
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>

        {/* PREVIEW */}
        <div className="bg-gray-100 rounded-xl h-40 flex items-center justify-center text-gray-500 mb-6">
          {fileName
            ? "PDF Preview Area (Mock)"
            : "No Document Selected"}
        </div>

        {/* SIGNATURE */}
        <div className="border border-gray-200 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-2 text-gray-700">
            <PenTool size={18} />
            E-Signature Pad
          </div>

          <canvas
            ref={canvasRef}
            width={600}
            height={120}
            className="w-full h-32 bg-gray-50 rounded-lg border"
            onMouseDown={startDraw}
            onMouseUp={endDraw}
            onMouseLeave={endDraw}
            onMouseMove={draw}
          />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button
            onClick={() => setStatus("Draft")}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            Save Draft
          </button>

          <button
            onClick={() => setStatus("In Review")}
            className="px-4 py-2 bg-yellow-400 text-white rounded-lg"
          >
            Send for Review
          </button>

          <button
            onClick={() => setStatus("Signed")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Mark Signed
          </button>
        </div>
      </motion.div>
    </div>
  );
}