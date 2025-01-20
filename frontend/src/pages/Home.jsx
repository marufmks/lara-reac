import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Footer from "../components/Footer";
import http from "../http";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await http.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Users Directory</h1>
        </div>
        <div className="users">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-primary" to={`/view/${user.id}`}>
                      View
                    </Link>
                    &nbsp;
                    <Link className="btn btn-warning" to={`/edit/${user.id}`}>
                      Edit
                    </Link>
                    &nbsp;
                    <Link className="btn btn-danger" to={`/delete/${user.id}`}>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
