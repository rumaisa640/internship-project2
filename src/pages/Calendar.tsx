"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function CalendarPage() {
  const [events, setEvents] = useState([
    {
      title: "Meeting with Client",
      date: "2026-04-28",
    },
  ]);

  const handleDateClick = (info: DateClickArg) => {
    const title = prompt("Enter meeting title:");

    if (title) {
      setEvents((prev) => [
        ...prev,
        {
          title,
          date: info.dateStr,
        },
      ]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-lg p-6"
      >

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
            <CalendarDays size={22} />
          </div>

          <h1 className="text-2xl font-semibold text-gray-800">
            Meeting Scheduler
          </h1>
        </div>

        {/* CALENDAR */}
        <div className="rounded-xl overflow-hidden border border-gray-200">

          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            editable={true}
            dateClick={handleDateClick}
            events={events}
            height="auto"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            eventColor="#3b82f6"
          />
        </div>
      </motion.div>
    </div>
  );
}