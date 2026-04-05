/* Renderar en dropdown-meny för att välja ett index (år) från en lista. Tar emot data och uppdaterar valt värde via props. */
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
          onChange={(e) => setSelectedIndex(e.target.value)} //vald värde uppdateras här
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
