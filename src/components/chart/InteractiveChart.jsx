import { useState, useEffect } from "react";
import ResponsiveAreaChart from "./ResponsiveAreaChart";
import SelectButton from "./SelectButton";

function InteractiveChart({ lectureJson }) {
  const [apiData, setApiData] = useState([]); //tom array
  const [startIndex, setStartIndex] = useState(""); //tom variabel
  const [endIndex, setEndIndex] = useState(""); //tom variabel
  const [displayedData, setDisplayedData] = useState([]); //tom array

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

  /* Bestämmer vilka startvärdena startIndex och endIndex har, så att man alltid börjar med värden i diagrammet (så det inte är tomt)*/
  useEffect(() => {
    if (apiData.length > 0) {
      setStartIndex(0);
      setEndIndex(apiData.length - 1);
    }
  }, [apiData]);

  /*Beroende på vilket/vilka år man sen väljer genom select-knapparna så visas det intervallet (med hjälp av slice-metoden) i diagrammet!*/
  useEffect(() => {
    if (apiData.length > 0) {
      setDisplayedData(apiData.slice(Number(startIndex), Number(endIndex) + 1));
    }
  }, [apiData, startIndex, endIndex]); //effekten renderas varje gång något av dessa ändras

  return (
    <div className="d-flex flex-column align-items-center gap-2 pb-4">
      <div className="d-flex flex-column container align-items-center">
        <h5 className="text-center pt-3">{lectureJson.chart.description}</h5>
        <ResponsiveAreaChart json={lectureJson} chartData={displayedData} />
      </div>
      <div className="d-flex gap-3">
        <SelectButton
          heading="Startår"
          optionData={apiData}
          selectedIndex={startIndex}
          setSelectedIndex={setStartIndex}
        />
        <SelectButton
          heading="Slutår"
          optionData={apiData}
          selectedIndex={endIndex}
          setSelectedIndex={setEndIndex}
        />
      </div>
    </div>
  );
}

export default InteractiveChart;
