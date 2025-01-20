import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import http from '../http';
import { useParams, useNavigate } from 'react-router-dom';

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await http.delete(`/users/${id}`);
      navigate('/');
    } catch (error) {
      console.error("Error deleting user:", error);
      navigate('/');
    }
  };

  return (
    <>
      <div className="create-container">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="create-card">
              <Card.Header className="text-center">
                <h2>Delete User</h2>
              </Card.Header>
              <Card.Body className="text-center">
                <h5 className="mb-4">Are you sure you want to delete this user?</h5>
                <div className="d-grid gap-2">
                  <Button 
                    variant="danger" 
                    size="lg" 
                    onClick={handleDelete}
                    disabled={loading}
                  >
                    {loading ? 'Deleting...' : 'Delete'}
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    onClick={() => navigate('/')}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
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

export default Delete;