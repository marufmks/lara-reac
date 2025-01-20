import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import http from "../http";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await http.get(`/users/${id}`);
      setName(response.data.name || '');
      setEmail(response.data.email || '');
    } catch (error) {
      console.error("Error fetching user:", error);
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email};
    http.put(`/users/${id}`, user)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="create-container">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="create-card">
              <Card.Header className="text-center">
                <h2>Edit User</h2>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button variant="primary" type="submit" size="lg">
                      Update User
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Edit;
