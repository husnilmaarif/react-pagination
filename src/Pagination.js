import React from "react";

function Pagination({ totalPages, handleClick }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  console.log(pages);
  return (
    <div>
      {pages.map((num) => {
        return (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
