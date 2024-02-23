import React, { useState } from "react";

function usePagination(data) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalCount = Object.entries(data).length;
  const pageArray = [];
  for (let i = 1; i <= Math.ceil(totalCount / 10); i++) {
    pageArray.push(i);
  }

  return [currentPage, setCurrentPage, pageArray];
}

export default usePagination;
