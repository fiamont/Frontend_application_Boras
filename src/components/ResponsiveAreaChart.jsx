import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";

function ResponsiveAreaChart({ lectureData }) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(lectureData.chart.uri);
      let data = await response.json();
      setApiData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="chart-background" style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={apiData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={lectureData.chart.dataKeyX} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={lectureData.chart.dataKeyY}
            name={lectureData.chart.yName}
            stroke="#194101"
            fill="#2a6e02"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ResponsiveAreaChart;
