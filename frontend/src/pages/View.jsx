import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import http from '../http';
import { useParams, useNavigate } from 'react-router-dom';

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await http.get(`/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-5">
        <h2>User not found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="create-container">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="create-card">
              <Card.Header className="text-center">
                <h2>User Details</h2>
              </Card.Header>
              <Card.Body>
                <div className="mb-3">
                  <h5 className="text-muted">Name</h5>
                  <p className="lead">{user.name}</p>
                </div>
                <div className="mb-3">
                  <h5 className="text-muted">Email</h5>
                  <p className="lead">{user.email}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default View;
