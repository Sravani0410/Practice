import React from "react";
import Pagination from "react-bootstrap/Pagination";
const Paginations = ({ handleprev, handlenext, page, pagecount, setPage }) => {
  return (
    <>
      {pagecount > 0 ? (
        <div className="pagination_div d-flex justify-content-end mx-5">
          <Pagination>
            <Pagination.Prev onClick={() => handleprev()} />
            {Array(pagecount)
              .fill(null)
              .map((el, index) => {
                return (
                  <>
                    <Pagination.Item
                      active={page === index + 1 ? true : false}
                      onClick={() => setPage(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  </>
                );
              })}

            <Pagination.Next onClick={() => handlenext()} />
          </Pagination>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Paginations;
