import React, { useState, useCallback } from "react";
import usePagination from "../Hooks/usePagination";
import { data } from "../data";

const debounce = (callback) => {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    console.log(timeoutId);

    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, 1000);
  };
};

function Pagination() {
  let [currentPage, setCurrentPage, pageArray] = usePagination(data);
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState(Object.values(data));

  const debouncedHandleSearchData = useCallback(
    debounce((event) => {
      event.persist();
      const filterSearchData = Object.values(data).filter((ele) => {
        return ele.toLowerCase().startsWith(event.target.value.toLowerCase());
      });
      console.log(event.target.value);
      setSearchData(event.target.value);
      setFilteredData(filterSearchData);
      console.log("Updating");
    }),
    []
  );
  return (
    <>
      <input
        type="text"
        value={searchData}
        onChange={debouncedHandleSearchData}
      />
      <div>
        {filteredData
          .slice((currentPage - 1) * 10, 10 * currentPage)
          .map((val, idx) => (
            <div key={idx}>{val}</div>
          ))}
        {pageArray.map((p) => (
          <button
            onClick={() => {
              setCurrentPage(p);
            }}
          >
            {p}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
