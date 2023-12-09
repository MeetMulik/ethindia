import { useState, useEffect } from "react";

const useMyLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setLoading(false);
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
  }, []);

  return { location, loading };
};

export default useMyLocation;
