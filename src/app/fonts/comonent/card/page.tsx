// // components/Card.js
// import React, { useState } from 'react';

// const Card = ({ title, content }) => {
//     const [location, setLocation] = useState(null);
//     const [showAlert, setShowAlert] = useState(false);

//     const handleButtonClick = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
//                     setShowAlert(true);
//                     setTimeout(() => setShowAlert(false), 5000); // Alert disappears after 5 seconds
//                 },
//                 (error) => {
//                     setLocation('Unable to retrieve location');
//                     setShowAlert(true);
//                     setTimeout(() => setShowAlert(false), 5000); // Alert disappears after 5 seconds
//                 }
//             );
//         } else {
//             setLocation('Geolocation is not supported by this browser.');
//             setShowAlert(true);
//             setTimeout(() => setShowAlert(false), 5000); // Alert disappears after 5 seconds
//         }
//     };

//     return (
//         <div className="card">
//             <h2>{title}</h2>
//             <p>{content}</p>
//             <button onClick={handleButtonClick}>Show Location</button>
//             {showAlert && <div className="alert">{location}</div>}
            
//         </div>
//     );
// };

// export default Card;
