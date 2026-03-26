function SelectButton({
  heading,
  optionData,
  selectedIndex,
  setSelectedIndex,
}) {
  return (
    <div>
      <label>
        {heading}:
        <select
          value={selectedIndex}
          className="ms-2"
          onChange={(e) => setSelectedIndex(e.target.value)}
        >
          {optionData.map((data, index) => (
            <option key={index} value={index}>
              {data.Year}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
export default SelectButton;
