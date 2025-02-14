// // import React, { useState, useEffect } from "react";
// // import Calendar from "react-calendar";
// // import { useNavigate } from "react-router-dom";
// // import "react-calendar/dist/Calendar.css";

// // function Calander() {
// //   const [date, setDate] = useState(new Date());
// //   const [events, setEvents] = useState({});
// //   const navigate = useNavigate();

// //   // Load saved events from localStorage on component mount
// //   useEffect(() => {
// //     const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
// //     setEvents(storedEvents);
// //   }, []);

// //   const handleDateChange = (newDate) => {
// //     setDate(newDate);
// //     navigate(`/selected-date/${newDate.toISOString().split("T")[0]}`);
// //   };

// //   return (
// //     <div className="container">
// //       <h2>Calendar</h2>
// //       <Calendar
// //         onChange={setDate}
// //         value={date}
// //         tileContent={({ date }) => {
// //           const formattedDate = date.toISOString().split("T")[0];
// //           if (events[formattedDate] && events[formattedDate].length > 0) {
// //             return (
// //               <div
// //                 style={{
// //                   position: "relative",
// //                   textAlign: "center",
// //                   color: "red",
// //                   fontSize: "20px",
// //                   cursor: "pointer",
// //                 }}
// //                 title={events[formattedDate].join(", ")} // Show all events on hover
// //               >
// //                 •
// //               </div>
// //             );
// //           } else {
// //             return (
// //               <button
// //                 onClick={() => handleDateChange(date)}
// //                 style={{
// //                   border: "none",
// //                   background: "none",
// //                   fontSize: "16px",
// //                   cursor: "pointer",
// //                   color: "blue",
// //                 }}
// //               >
// //                 +
// //               </button>
// //             );
// //           }
// //         }}
// //       />
// //       <p>Selected date: {date.toDateString()}</p>
// //     </div>
// //   );
// // }

// // export default Calander;
// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import { useNavigate } from "react-router-dom";
// import "react-calendar/dist/Calendar.css";
// import "./SelectedDatePage";

// function Calander() {
//   const [date, setDate] = useState(new Date());
//   const [events, setEvents] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
//     setEvents(storedEvents);
//   }, []);

//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//     navigate(`/selected-date/${newDate.toISOString().split("T")[0]}`);
//   };

//   return (
//     <div className="calendar-container">
//       <h2>Calendar</h2>
//       <Calendar
//         onChange={setDate}
//         value={date}
//         tileContent={({ date }) => {
//           const formattedDate = date.toISOString().split("T")[0];
//           return events[formattedDate]?.length > 0 ? (
//             <div className="event-dot" title={events[formattedDate].join(", ")}>
//               •
//             </div>
//           ) : (
//             <button className="add-event-btn" onClick={() => handleDateChange(date)}>+</button>
//           );
//         }}
//       />
//       <p>Selected date: {date.toDateString()}</p>
//     </div>
//   );
// }

// export default Calander;
// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./Calander.css";

// function Calander() {
//   const [date, setDate] = useState(new Date());
//   const [events, setEvents] = useState({});
//   const [selectedEvents, setSelectedEvents] = useState([]);
//   const [eventName, setEventName] = useState("");
//   const [eventTime, setEventTime] = useState("12:00");

//   // Load saved events from localStorage
//   useEffect(() => {
//     const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
//     setEvents(storedEvents);
//   }, []);

//   // When a date is selected, update the selected events list
//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//     const formattedDate = newDate.toISOString().split("T")[0];
//     setSelectedEvents(events[formattedDate] || []);
//   };

//   // Save new event
//   const handleSaveEvent = () => {
//     if (!eventName.trim()) return alert("Enter an event name!");

//     const formattedDate = date.toISOString().split("T")[0];
//     const newEvent = `${eventTime} - ${eventName}`;
//     const updatedEvents = {
//       ...events,
//       [formattedDate]: [...(events[formattedDate] || []), newEvent],
//     };

//     setEvents(updatedEvents);
//     setSelectedEvents(updatedEvents[formattedDate]);
//     localStorage.setItem("events", JSON.stringify(updatedEvents));

//     setEventName(""); // Clear input
//     setEventTime("12:00"); // Reset time
//   };

//   return (
//     <div className="calendar-container">
//       <h2>Calendar</h2>
//       <Calendar
//         onChange={handleDateChange}
//         value={date}
//         tileContent={({ date }) => {
//           const formattedDate = date.toISOString().split("T")[0];
//           return events[formattedDate]?.length > 0 ? (
//             <div className="event-dot" title={events[formattedDate].join("\n")}>•</div>
//           ) : null;
//         }}
//       />
//       <p>Selected Date: {date.toDateString()}</p>

//       {/* Show Events Below Calendar */}
//       <div className="event-section">
//         <h3>Events on {date.toISOString().split("T")[0]}</h3>
//         {selectedEvents.length > 0 ? (
//           <ul className="event-list">
//             {selectedEvents.map((event, index) => (
//               <li key={index}>{event}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No events for this date.</p>
//         )}

//         {/* Add New Event */}
//         <input
//           type="text"
//           placeholder="Enter event name"
//           value={eventName}
//           onChange={(e) => setEventName(e.target.value)}
//           className="event-input"
//         />
//         <input
//           type="time"
//           value={eventTime}
//           onChange={(e) => setEventTime(e.target.value)}
//           className="event-time-picker"
//         />
//         <button onClick={handleSaveEvent} className="save-event-btn">
//           Save Event
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Calander;


import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import "./Calander.css";

function Calander() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const navigate = useNavigate();

  // Load saved events from localStorage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
    setEvents(storedEvents);
  }, []);

  // Redirect to event details page
  const handleDateClick = (selectedDate) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    navigate(`/events/${formattedDate}`);
  };

  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date }) => {
          const formattedDate = date.toISOString().split("T")[0];
          return events[formattedDate]?.length > 0 ? (
            <div className="event-dot" title={events[formattedDate].join("\n")}>•</div>
          ) : (
            <button
              className="add-event-btn"
              onClick={() => handleDateClick(date)}
            >
              +
            </button>
          );
        }}
        onClickDay={handleDateClick} // Clicking a date redirects to event page
      />
      <p>Click a date to view or add events.</p>
    </div>
  );
}

export default Calander;
