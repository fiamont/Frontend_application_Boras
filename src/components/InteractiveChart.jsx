import ResponsiveAreaChart from "./ResponsiveAreaChart";

function InteractiveChart({ data }) {
  return (
    <div className="d-flex flex-column align-items-center gap-2 pb-4">
      <div className="d-flex flex-column container align-items-center">
        <h5 className="text-center pt-3">{data.chart.description}</h5>
        <ResponsiveAreaChart lectureData={data} />
      </div>
      <div className="d-flex gap-3">
        Select-knapparna (kommande komponent som interagerar med
        ResponsivAreaChart)
      </div>
    </div>
  );
}

export default InteractiveChart;
