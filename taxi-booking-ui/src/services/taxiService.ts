import axios from "axios";
import { ITaxi } from "../types/ITaxi.ts";

const taxiService = {
  getTaxis: async (): Promise<ITaxi[]> => {
    try {
      // Replace this with your real API URL
      const response = await axios.get<ITaxi[]>("https://api.example.com/taxis");
      return response.data;
    } catch (err) {
      console.error(err);
      return [
        { id: 1, name: "Dummy Taxi 1", location: "Location A", price: 100 },
        { id: 2, name: "Dummy Taxi 2", location: "Location B", price: 200 },
      ];
    }
  },
};

export default taxiService;

