import React, { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Tables from "../../components/Tables/Tables";
import Spiner from "../../components/Spiner/Spiner";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import {
  addData,
  deleteData,
  updateData,
} from "../../components/context/ContextProvider";
import "./Home.css";
import {
  exporttocsvfunction,
  userDeleteFunction,
  userDetailsFunction,
} from "../../services/Apis";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const [showSpin, setShowSpin] = useState(true);
  const [search, setSearch] = useState("");
  const [filtergender, setFilterGender] = useState("All");
  const [status, setActive] = useState("All");
  const [sort, setSort] = useState("new");
  const [page, setPage] = useState(1);
  const [pagecount, setPageCount] = useState(0);
  const { userAdd, setUserAdd } = useContext(addData);
  const { update, setUpdate } = useContext(updateData);
  const { userdelete, setUserDelete } = useContext(deleteData);
  const adduser = () => {
    navigate("/register");
  };
  // get the user
  const userGet = async () => {
    const response = await userDetailsFunction(
      search,
      filtergender,
      status,
      sort,
      page
    );
    console.log("response", response);
    if (response.status === 200) {
      // usersdata is coming from backend in usercontrollers
      setUserData(response.data.usersdata);
      // here Pagination and pageCount is coming from backend(usercontrollers) ==> Pagination: { count,  pageCount }
      setPageCount(response.data.Pagination.pageCount);
    } else {
      console.log("error is get user data");
    }
  };
  // user delete
  const userDelete = async (id) => {
    const response = await userDeleteFunction(id);
    // console.log("delete user",response)
    if (response.status == 200) {
      userGet();
      setUserDelete(response.data);
    } else {
      toast.error("error");
    }
  };
  // export user
  const exportuser = async () => {
    const response = await exporttocsvfunction();
    // console.log(response)
    if (response.status === 200) {
      window.open(response.data.downloadUrl, "blank");
    } else {
      toast.error("error !");
    }
  };
  // pagination
  // handle previous button

  const handleprev = () => {
    setPage(() => {
      if (page === 1) {
        return page;
      } else {
        return page - 1;
      }
    });
  };
  // handle next button
  const handlenext = () => {
    setPage(() => {
      if (page === pagecount ) {
        return page;
      } else {
        return page + 1;
      }
    });
  };

  useEffect(() => {
    userGet();
    setTimeout(() => {
      setShowSpin(false);
    }, [1200]);
  }, [search, filtergender, status, sort,page]);
  // console.log("userAdd", addData);
  return (
    <>
      {userAdd ? (
        <Alert variant="success" onClose={() => setUserAdd("")} dismissible>
          {userAdd.fname.toUpperCase()} Succesfully Added
        </Alert>
      ) : (
        ""
      )}
      {update ? (
        <Alert variant="primary" onClose={() => setUpdate("")} dismissible>
          {update.fname.toUpperCase()} Succesfully Update Added
        </Alert>
      ) : (
        ""
      )}
      {userdelete ? (
        <Alert variant="danger" onClose={() => setUserDelete("")} dismissible>
          {userdelete.fname.toUpperCase()} Succesfully Delete
        </Alert>
      ) : (
        ""
      )}
      <div className="container">
        <div className="main_div">
          {/* search add button */}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4 ">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="success" className="search_btn">
                  Search
                </Button>
              </Form>
            </div>
            <div className="add_btn">
              <Button variant="primary" onClick={adduser}>
                <i className="fa-solid fa-plus"></i>&nbsp;Add User
              </Button>
            </div>
          </div>
          {/* export, gender, status */}
          <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            <div className="export_csv">
              <Button className="export_btn" onClick={exportuser}>
                Export To Csv
              </Button>
            </div>
            <div className="filter_gender">
              <div className="filter">
                <h3>Filter By Gender</h3>
                <div className="gender d-flex justify-content-around">
                  <Form.Check
                    type={"radio"}
                    label={"All"}
                    name="gender"
                    value={"All"}
                    onChange={(e) => setFilterGender(e.target.value)}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Male"}
                    name="gender"
                    onChange={(e) => setFilterGender(e.target.value)}
                    value={"Male"}
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Female"}
                    name="gender"
                    onChange={(e) => setFilterGender(e.target.value)}
                    value={"Female"}
                  />
                </div>
              </div>
            </div>
            {/* sort by value */}
            <div className="filter_newold">
              <h3>Sort By Value</h3>
              <Dropdown className="text-center">
                <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                  <i className="fa-solid fa-sort"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSort("new")}>
                    New
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setSort("old")}>
                    Old
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* filter by status*/}
            <div className="filter_status">
              <div className="status">
                <h3>Filter By Status</h3>
                <div className="status_radio d-flex justify-content-around flex-wrap">
                  <Form.Check
                    type={"radio"}
                    label={"All"}
                    name="status"
                    value={"All"}
                    onChange={(e) => setActive(e.target.value)}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Active"}
                    name="status"
                    value={"Active"}
                    onChange={(e) => setActive(e.target.value)}
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Inactive"}
                    name="status"
                    value={"InActive"}
                    onChange={(e) => setActive(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSpin ? (
          <Spiner />
        ) : (
          <Tables
            userData={userData}
            userDelete={userDelete}
            userGet={userDetailsFunction}
            handleprev={handleprev}
            handlenext={handlenext}
            page={page}
            pagecount={pagecount}
            setPage={setPage}
          />
        )}
      </div>
    </>
  );
};

export default Home;
