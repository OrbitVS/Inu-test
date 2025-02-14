// // import React, { useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";

// // function SelectedDatePage() {
// //   const { date } = useParams();
// //   const [eventName, setEventName] = useState("");
// //   const navigate = useNavigate();

// //   const handleSave = () => {
// //     if (!eventName.trim()) return alert("Enter an event name!");
    
// //     // Save event in local storage
// //     localStorage.setItem(date, eventName);
    
// //     alert(`Event "${eventName}" saved for ${date}`);
// //     navigate("/calander"); // Go back to calendar
// //   };

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "50px" }}>
// //       <h2>Selected Date: {date}</h2>
// //       <input
// //         type="text"
// //         placeholder="Enter event name"
// //         value={eventName}
// //         onChange={(e) => setEventName(e.target.value)}
// //         style={{ padding: "8px", margin: "10px", width: "200px" }}
// //       />
// //       <br />
// //       <button onClick={handleSave} style={{ padding: "8px 16px", cursor: "pointer" }}>
// //         Save Event
// //       </button>
// //     </div>
// //   );
// // }

// // export default SelectedDatePage;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";


// function SelectedDatePage() {
//   const { date } = useParams();
//   const [eventName, setEventName] = useState("");
//   const [events, setEvents] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
//     setEvents(storedEvents[date] || []);
//   }, [date]);

//   const handleSave = () => {
//     if (!eventName.trim()) return alert("Enter an event name!");

//     const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
//     const updatedEvents = {
//       ...storedEvents,
//       [date]: [...(storedEvents[date] || []), eventName], // Append event
//     };

//     localStorage.setItem("events", JSON.stringify(updatedEvents));
//     setEvents(updatedEvents[date]); // Update local state
//     setEventName(""); // Clear input
//   };

//   return (
//     <div className="event-page-container">
//       <h2>Selected Date: {date}</h2>
      
//       <h3>Events:</h3>
//       {events.length > 0 ? (
//         <ul className="event-list">
//           {events.map((event, index) => (
//             <li key={index}>{event}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No events yet.</p>
//       )}

//       <input
//         type="text"
//         placeholder="Enter event name"
//         value={eventName}
//         onChange={(e) => setEventName(e.target.value)}
//         className="event-input"
//       />
//       <button onClick={handleSave} className="save-event-btn">Save Event</button>
      
//       <button onClick={() => navigate("/calander")} className="back-btn">Back to Calendar</button>
//     </div>
//   );
// }

// export default SelectedDatePage;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SelectedDatePage.css"; // Separate CSS file

function SelectedDatePage() {
  const { date } = useParams();
  const [eventName, setEventName] = useState("");
  const [eventTime, setEventTime] = useState("12:00"); // Default time
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
    setEvents(storedEvents[date] || []);
  }, [date]);

  const handleSave = () => {
    if (!eventName.trim()) return alert("Enter an event name!");

    const newEvent = `${eventTime} - ${eventName}`; // Combine time with event
    const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
    const updatedEvents = {
      ...storedEvents,
      [date]: [...(storedEvents[date] || []), newEvent], // Append event with time
    };

    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEvents(updatedEvents[date]); // Update local state
    setEventName(""); // Clear input
    setEventTime("12:00"); // Reset time
  };

  return (
    <div className="event-page-container">
      <h2>Selected Date: {date}</h2>

      <h3>Events:</h3>
      {events.length > 0 ? (
        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      ) : (
        <p>No events yet.</p>
      )}

      <input
        type="text"
        placeholder="Enter event name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="event-input"
      />

      {/* Time Picker */}
      <input
        type="time"
        value={eventTime}
        onChange={(e) => setEventTime(e.target.value)}
        className="event-time-picker"
      />

      <button onClick={handleSave} className="save-event-btn">
        Save Event
      </button>

      <button onClick={() => navigate("/calander")} className="back-btn">
        Back to Calendar
      </button>
    </div>
  );
}

export default SelectedDatePage;
