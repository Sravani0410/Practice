import React from "react";
import Pagination from "react-bootstrap/Pagination";
import ReactPaginate from "react-paginate";
const Paginations = ({ handleprev, handlenext, page, pagecount, setPage }) => {
  console.log("handlenext========>",handlenext(),"handleprev=========>",handleprev(),"setPage========>",setPage,"page======>",page)
  const handlePageClick = (data) => {
    console.log("hjsgah====>",data.selected)
    setPage(data.selected)
  };
  return (
    <>
      {/* <ReactPaginate
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pagecount}
        breakClassName="page-item"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLinkClassName="page-link"
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        activeClassName="active"
      /> */}
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
