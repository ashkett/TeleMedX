import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const StepsCount = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/fetch-steps", { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setData(data);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      style={{
        flex: 1,
        height: 400,
        background: "linear-gradient(to right, #0D47A1, #1976D2)",
        borderRadius: "8px",
        padding: "20px",
        color: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Weekly Step Count</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFC107" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#FFA000" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.4)" />
          <XAxis dataKey="date" tick={{ fill: "#fff" }} />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#000" }} />
          <Bar dataKey="stepCount" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StepsCount;
