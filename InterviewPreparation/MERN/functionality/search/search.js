import { useState, useEffect, useRef } from "react";

const data = [
  { name: "sravani" },

  { name: "sandhya" },

  { name: "srava" },

  { name: "sravani" },

  { name: "srava" },

  { name: "astha" },

  { name: "neha" },

  { name: "gfvgh" },
];

export default function UpdateSearch() {
  const [value, setValue] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState(null);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const dropdownRef = useRef(null);

  const [filteredData, setFilteredData] = useState(data);

  const onChange = (e) => {
    setValue(e.target.value);

    setIsOpen(true);

    setSelectedValue(null);

    setHighlightedIndex(-1);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);

    setIsOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(value);
    } else if (e.key === "ArrowDown") {
      e.preventDefault(); // prevent cursor from moving to end of input

      setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault(); // prevent cursor from moving to start of input

      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? filteredData.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    setFilteredData(
      data.filter((item) => {
        const searchTerm = value.toLowerCase();

        const name = item.name.toLowerCase();

        return searchTerm && name.includes(searchTerm);
      })
    );

    setSelectedIndex(-1);

    setHighlightedIndex(-1);
  }, [value]);

  useEffect(() => {
    if (selectedIndex !== -1) {
      setSelectedValue(filteredData[selectedIndex]?.name || null);

      setHighlightedIndex(selectedIndex);
    }
  }, [selectedIndex]);

  return (
    <div className="App">
        <h1>Search</h1>
          {" "}
      <div className="search-container">
              {" "}
        <div className="search-inner">
                  {" "}
          <input
            type="text"
            value={selectedValue ?? value} // use selectedValue if it's not null
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
                {" "}
        </div>
              {" "}
        {isOpen && (
          <div className="dropdown" ref={dropdownRef}>
                      {" "}
            {filteredData.map((item, index) => (
              <div
                className={`dropdown-row${
                  highlightedIndex === index ? " selected" : ""
                }`}
                style={{
                  backgroundColor:
                    highlightedIndex === index ? "yellow" : "white",

                  color: highlightedIndex === index ? "black" : "gray",
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => {
                  setSelectedValue(item.name);

                  onSearch(item.name);
                }}
                key={item.name}
              >
                               {item.name}
                            {" "}
              </div>
            ))}
                    {" "}
          </div>
        )}
            {" "}
      </div>
        {" "}
    </div>
  );
}
