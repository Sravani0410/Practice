import React, { useState, useEffect, useMemo } from "react";
import { data } from "./Data";
import Pagination from "./Pagination";
import "./Navbar.scss";

let PageSize = 5;
const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredList, setFilteredList] = useState(data);
  
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const [current ,setCurrent] = useState(currentTableData)

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...currentTableData];
    console.log(" current data",currentTableData)
    updatedList = currentTableData.filter((item) => {
      console.log(item.project_name)
      return (
        item.project_name.toLowerCase().includes(query.toLowerCase())
      );
    });
    setCurrent(updatedList)
    console.log(updatedList)
  };
  const lowToHigh = () => {
    const temp = current.sort((a, b) => {
      return a.resources - b.resources;
    });
    setFilteredList([...temp]);
  };
    const HighToLow = () => {
    const temp = current.sort((a, b) => {
      return b.resources - a.resources;
    });
    setFilteredList([...temp]);
  };
  useEffect(() => {
    setCurrent(currentTableData)
  }, [currentPage]);
  return (
    <div>
      <div className=" row searchBar d-flex">
        <div className="dropdown col-2">
          <a
            className="btn btn-secondary dropdown-toggle w-100"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter Button
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" onClick={HighToLow}>
                High To Low
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={lowToHigh}>
                Low To High
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onInput={filterBySearch}
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Project Name</th>
            <th scope="col">PM Status</th>
            <th scope="col">Last Update</th>
            <th scope="col">Resource</th>
            <th scope="col">Project TimeLine</th>
            <th scope="col">Estimation</th>
          </tr>
        </thead>
        <tbody>
          {current.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.project_name}</td>
                <td>
                  <img className="tableImg" src={item.pm} alt="" />{" "}
                  {item.status}
                </td>
                <td>{item.last_update}</td>
                <td>{item.resources}</td>
                <td>{item.project_timeline}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Table;
