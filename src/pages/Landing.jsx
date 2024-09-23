// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ReactPlayer from "react-player";

// // Import video files from the src directory
// import mobileVideo from "../assets/videos/mobile.mp4";
// import webVideo from "../assets/videos/web.mp4";

// function Landing() {
//   const [isMobile, setIsMobile] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkMobileView = () => {
//       setIsMobile(window.innerWidth <= 768); // Set mobile view if the screen width is <= 768px
//     };

//     checkMobileView(); // Check on initial load
//     window.addEventListener("resize", checkMobileView); // Add resize event listener

//     return () => {
//       window.removeEventListener("resize", checkMobileView); // Cleanup on unmount
//     };
//   }, []);

//   const handleButtonClick = () => {
//     navigate("/selector"); // Navigate to the selector page on button click
//   };

//   // Inline styles
//   const styles = {
//     main: {
//       width: "100%",
//       height: "100vh",
//       overflow: "hidden",
//       position: "relative",
//     },
//     video: {
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//     },
//     content: {
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       top: 0,
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       color: "white",
//       zIndex: 1, // Ensure the content is above the video
//     },
//     diveButton: {
//       backgroundColor: "#EB7E21",
//       color: "white",
//       marginTop: "500px", 
//       padding: "15px 30px",
//       fontSize: "18px",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       opacity: 1, // Set opacity to 1 for visibility
//       transform: "translateX(0)", // Remove the transform to keep it in place
//       zIndex: 2, // Ensure the button is above the video
//       transition: "opacity 0.5s ease-in-out", // Add a smooth transition for opacity
//     },
//   };

//   return (
//     <div style={styles.main}>
//       <ReactPlayer
//         url={isMobile ? mobileVideo : webVideo} // Use the imported videos
//         playing
//         loop
//         muted
//         width="100%"
//         height="100%"
//         style={styles.video}
//       />
//       <div style={styles.content}>
//         <button style={styles.diveButton} onClick={handleButtonClick}>
//           Let's Dive In
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Landing;
