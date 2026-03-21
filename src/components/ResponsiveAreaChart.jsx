import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ResponsiveAreaChart({ json, apiData }) {
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
          <XAxis dataKey={json.chart.dataKeyX} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={json.chart.dataKeyY}
            name={json.chart.yName}
            stroke="var(--dark-green)"
            fill="var(--green)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ResponsiveAreaChart;
