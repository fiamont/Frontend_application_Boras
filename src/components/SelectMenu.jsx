function SelectMenu({ heading, optionData, selectedYear, setSelectedYear }) {
  let modifiedOptions = optionData;

  if (heading === "Slutår") {
    modifiedOptions = [...optionData].reverse();
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
          {modifiedOptions.map((data, index) => (
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
