import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const HeartRate = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/fetch-heartrate", { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setData(data);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching heart rate data:", error));
  }, []);

  return (
    <div
      style={{
        flex: 1,
        height: 400,
        background: "#FCE4EC", // Very Light Pink Background
        borderRadius: "12px",
        padding: "20px",
        color: "#333",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for separation
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "600" }}>
        Heart Rate Trends
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          {/* Gradient for Line Color */}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7E57C2" stopOpacity={0.9} /> {/* Soft Purple */}
              <stop offset="100%" stopColor="#673AB7" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.1)" />
          <XAxis dataKey="date" tick={{ fill: "#555" }} />
          <YAxis tick={{ fill: "#555" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              color: "#333",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <Line
            type="monotone"
            dataKey="heartRate"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={{ r: 5, fill: "#7E57C2", stroke: "#673AB7", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeartRate;
