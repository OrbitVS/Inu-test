import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventPage.css";

function EventPage() {
  const { date } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventTime, setEventTime] = useState("12:00");

  // Load events for the selected date
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
    setEvents(storedEvents[date] || []);
  }, [date]);

  // Save new event
  const handleSaveEvent = () => {
    if (!eventName.trim()) return alert("Enter an event name!");

    const newEvent = `${eventTime} - ${eventName}`;
    const updatedEvents = [...events, newEvent];

    setEvents(updatedEvents);
    const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
    storedEvents[date] = updatedEvents;
    localStorage.setItem("events", JSON.stringify(storedEvents));

    setEventName(""); // Clear input
    setEventTime("12:00"); // Reset time
  };

  return (
    <div className="event-page-container">
      <button onClick={() => navigate("/")} className="back-btn">← Back</button>
      <h2>Events for {date}</h2>

      {events.length > 0 ? (
        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      ) : (
        <p>No events for this date.</p>
      )}

      {/* Add New Event */}
      <input
        type="text"
        placeholder="Enter event name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="event-input"
      />
      <input
        type="time"
        value={eventTime}
        onChange={(e) => setEventTime(e.target.value)}
        className="event-time-picker"
      />
      <button onClick={handleSaveEvent} className="save-event-btn">
        Save Event
      </button>
    </div>
  );
}

export default EventPage;
