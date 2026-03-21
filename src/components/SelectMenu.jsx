import { useState, useEffect } from "react";

function SelectMenu({ heading, lectureData }) {
  const [apiData, setApiData] = useState([]); //tom array
  const [selectedYear, setSelectedYear] = useState(""); //tom variabel

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(lectureData.chart.uri);
      let data = await response.json();

      if (lectureData.title === "Globala temperaturer") {
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
  }, [lectureData]);

  let displayedData;

  if (heading === "Slutår") {
    displayedData = apiData.toReversed(); //gör så listan på slutår blir omvänd
  } else {
    displayedData = apiData;
  }

  return (
    <div>
      <label>
        {heading}:
        <select
          value={selectedYear}
          className="ms-2"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {displayedData.map((data, index) => (
            <option key={index} value={data.Year}>
              {data.Year}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
export default SelectMenu;
