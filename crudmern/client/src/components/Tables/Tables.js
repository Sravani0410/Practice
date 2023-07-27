import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Paginations from "../Pagination/Paginations";
import Dropdown from "react-bootstrap/Dropdown";
import "./Tables.css";
import { BASE_URL } from "../../services/helper";
import { NavLink } from "react-router-dom";
import { statuschangefunction } from "../../services/Apis";
import { ToastContainer, toast } from "react-toastify";
const Tables = ({
  userData,
  userDelete,
  userGet,
  handleprev,
  handlenext,
  page,
  pagecount,
  setPage,
}) => {
  const handleChange = async (id, status) => {
    // console.log(id, status);
    const response = await statuschangefunction(id, status);
    // console.log("response", response?.data);
    if (response.status === 200) {
      window.location.reload(false);
      // console.log("value of userGet after change the status", userGet());
      userGet();
      toast.success("Status Updated");
    } else {
      toast.error("error ");
    }
  };
  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-0">
            <Card className="shadow">
              <Table className="align-items-center" responsive="sm">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData?.length > 0 ? (
                    userData?.map((el, index) => {
                      // console.log(el);
                      return (
                        <>
                          <tr>
                            <td>{index + 1 + (page-1)*2}</td> 
                            <td>{el.fname}</td>
                            <td>{el.email}</td>
                            <td>{el.gender == "Male" ? "M" : "F"}</td>
                            <td className="d-flex align-items-center">
                              <Dropdown className="text-center">
                                <Dropdown.Toggle
                                  className="dropdown_btn"
                                  id="dropdown-basic"
                                >
                                  <Badge
                                    bg={
                                      el.status == "Active"
                                        ? "primary"
                                        : "danger"
                                    }
                                  >
                                    {el.status}{" "}
                                    <i className="fa-solid fa-angle-down"></i>
                                  </Badge>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item
                                    onClick={() =>
                                      handleChange(el._id, "Active")
                                    }
                                  >
                                    Active
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    onClick={() =>
                                      handleChange(el._id, "InActive")
                                    }
                                  >
                                    InActive
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                            <td className="img_parent">
                              <img
                                src={`${BASE_URL}/uploads/${el.profile}`}
                                alt="img"
                              ></img>
                            </td>
                            <td>
                              <Dropdown className="text-center">
                                <Dropdown.Toggle
                                  variant="light"
                                  className="action"
                                  id="dropdown-basic"
                                >
                                  <i className="fa-solid fa-ellipsis-vertical"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <NavLink
                                      className="text-decoration-none"
                                      to={`/userprofile/${el._id}`}
                                    >
                                      <i
                                        className="fa-solid fa-eye"
                                        style={{ color: "green" }}
                                      ></i>{" "}
                                      &nbsp;<span>View</span>
                                    </NavLink>
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <NavLink
                                      className="text-decoration-none"
                                      to={`/edit/${el._id}`}
                                    >
                                      <i
                                        className="fa-solid fa-pen-to-square"
                                        style={{ color: "blue" }}
                                      ></i>{" "}
                                      &nbsp;<span>Edit</span>
                                    </NavLink>
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    <div onClick={() => userDelete(el._id)}>
                                      <i
                                        className="fa-solid fa-trash"
                                        style={{ color: "red" }}
                                      ></i>{" "}
                                      &nbsp;<span>Delete</span>
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <div className="no_data text-center">No Data Found</div>
                  )}
                </tbody>
              </Table>
              <Paginations
                handleprev={handleprev}
                handlenext={handlenext}
                page={page}
                pagecount={pagecount}
                setPage={setPage}
              />
            </Card>
          </div>
        </Row>
        <ToastContainer />
      </div>
    </>
  );
};

export default Tables;
