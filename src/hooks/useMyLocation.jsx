// import { useState, useEffect } from "react";

// const useMyLocation = () => {
//   const [location, setLocation] = useState({ latitude: null, longitude: null });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getLocation = () => {
//       if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(
//           function (position) {
//             setLocation({
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//             });
//             setLoading(false);
//           },
//           function (error) {
//             console.error("Error getting geolocation:", error);
//             setLoading(false);
//           }
//         );
//       } else {
//         console.log("Geolocation is not available in your browser.");
//         setLoading(false);
//       }
//     };

//     getLocation();
//   }, []);

//   return { location, loading };
// };

// export default useMyLocation;

import { useState, useEffect } from "react";

const useMyLocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async function (position) {
            const { latitude, longitude } = position.coords;

            try {
              const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
                  location.latitude
                },${
                  location.longitude
                }&key=${"d8585462a6msh70cdc292ac9e580p1b6156jsnb548134f9c96"}`
              );

              if (!response.ok) {
                throw new Error("Failed to fetch location data");
              }

              const data = await response.json();
              const address = data.results[0]?.formatted_address || "Unknown";
              setLocation({ latitude, longitude, address });
              setLoading(false);
            } catch (error) {
              console.error("Error getting geolocation:", error);
              setLoading(false);
            }
          },
          function (error) {
            console.error("Error getting geolocation:", error);
            setLoading(false);
          }
        );
      } else {
        console.log("Geolocation is not available in your browser.");
        setLoading(false);
      }
    };

    getLocation();
  }, [location]);

  return { location, loading };
};

export default useMyLocation;
