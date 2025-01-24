import React, { useEffect, useState } from "react";
import { ITaxi } from "../types/ITaxi";
import taxiService from "../services/TaxiService.ts";
import "./TaxiList.scss";

const TaxiList: React.FC = () => {
  const [taxis, setTaxis] = useState<ITaxi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
  /**
   * Fetches the list of taxis from the server.
   * If the request succeeds, set the taxis state to the response.
   * If the request fails, set the error state and set the taxis state to dummy data.
   * Finally, set the loading state to false.
   */
    const fetchTaxis = async () => {
      try {
        const response = await taxiService.getTaxis();
        setTaxis(response);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch taxis. Showing dummy data.");
        setTaxis([
          { id: 1, name: "Dummy Taxi 1", location: "Location A", price: 100 },
          { id: 2, name: "Dummy Taxi 2", location: "Location B", price: 200 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTaxis();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="taxi-list">
      {taxis.map((taxi) => (
        <div key={taxi.id} className="taxi-card">
          <h3>{taxi.name}</h3>
          <p>Location: {taxi.location}</p>
          <p>Price: ${taxi.price}</p>
        </div>
      ))}
    </div>
  );
};

export default TaxiList;
