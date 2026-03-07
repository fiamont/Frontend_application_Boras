import ResponsiveAreaChart from "./ResponsiveAreaChart";

function InteractiveChart() {
  return (
    <div className="d-flex flex-column align-items-center gap-2 pb-4">
      <div className="d-flex flex-column container align-items-center">
        {/* <div className="chart-square"></div> */}
        <ResponsiveAreaChart />
        <h5 className="text-center pt-3">Beskrivningen på diagrammet</h5>
      </div>
      <div className="d-flex gap-3">Select-knapparna</div>
    </div>
  );
}

export default InteractiveChart;
