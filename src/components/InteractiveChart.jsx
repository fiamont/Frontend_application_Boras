function InteractiveChart() {
  return (
    <div className="d-flex flex-column align-items-center gap-2 pb-4">
      <div className="d-flex flex-column p-3 chart-background container align-items-center">
        <div className="chart-square"></div>
        <h5 className="text-center pt-3">Beskrivningen på diagrammet</h5>
      </div>
      <div className="d-flex gap-3">Select-knapparna</div>
    </div>
  );
}

export default InteractiveChart;
