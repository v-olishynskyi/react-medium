import React from "react";
import { range } from ".././../utils";
import { Link } from "react-router-dom";
import classNames from "classnames";

const PaginationItem = ({ page, currentPage, url }) => {
  const liClasses = classNames({
    "page-item": true,
    active: currentPage === page
  });

  return (
    <li className={liClasses}>
      <Link to={`${url}?page=${page}`} className="page-link" active>
        {page}
      </Link>
    </li>
  );
};

const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  return (
    <ul className="pagination">
      {pages.map(page => (
        <PaginationItem
          page={page}
          currentPage={currentPage}
          url={url}
          key={page}
        />
      ))}
    </ul>
  );
};

export default Pagination;
