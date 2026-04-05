import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* Renderar ett responsivt ytdiagram med data som skickas in via props. Använder json-propen för att bestämma vilka datanycklar (datakey) som ska visas på X- och Y-axeln. */
function ResponsiveAreaChart({ json, chartData }) {
  return (
    <div className="my-chart-container">
      <ResponsiveContainer>
        <AreaChart
          data={chartData}
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
            name={json.chart.yName} //rubrik på y-axeln som visas när man hovrar
            stroke="var(--dark-green)"
            fill="var(--green)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ResponsiveAreaChart;
