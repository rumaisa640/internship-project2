"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Security() {
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const strength = () => {
    if (password.length < 4) return "Weak";
    if (password.length < 8) return "Medium";
    return "Strong";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6"
      >

        <h1 className="text-xl font-semibold mb-4">Security Setup</h1>

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="mb-4 text-sm">
          Strength:{" "}
          <span
            className={
              strength() === "Strong"
                ? "text-green-600"
                : strength() === "Medium"
                ? "text-yellow-500"
                : "text-red-500"
            }
          >
            {strength()}
          </span>
        </p>

        {/* 2FA OTP */}
        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full border p-2 rounded mb-4"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Verify Login
        </button>

      </motion.div>
    </div>
  );
}