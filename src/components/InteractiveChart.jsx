import { useState, useEffect } from "react";
import ResponsiveAreaChart from "./ResponsiveAreaChart";
import SelectMenu from "./SelectMenu";

function InteractiveChart({ lectureJson }) {
  const [apiData, setApiData] = useState([]); //tom array

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(lectureJson.chart.uri);
      let data = await response.json();

      if (lectureJson.title === "Globala temperaturer") {
        const reversedData = data.toReversed(); // kopiera + vänd ordningen
        const onlyGISTEMPData = reversedData.filter(
          (item) => item.Source === "GISTEMP",
        ); //gör så bara objekten med source GISTEMP (yttempteratur) används
        setApiData(onlyGISTEMPData);
      } else {
        setApiData(data);
      }
    }
    fetchData();
  }, [lectureJson]);

  return (
    <div className="d-flex flex-column align-items-center gap-2 pb-4">
      <div className="d-flex flex-column container align-items-center">
        <h5 className="text-center pt-3">{lectureJson.chart.description}</h5>
        <ResponsiveAreaChart json={lectureJson} apiData={apiData} />
      </div>
      <div className="d-flex gap-3">
        <SelectMenu heading="Startår" lectureData={lectureJson} />
        <SelectMenu heading="Slutår" lectureData={lectureJson} />
      </div>
    </div>
  );
}

export default InteractiveChart;
