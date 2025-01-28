import React, { useState, useEffect } from "react";
import { getAllTaxi, deleteTaxi } from "../services/TaxiService.ts";
import { TaxiFormData } from "../types/ITaxi";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function AllTaxi() {
    const [allTaxi, setAllTaxi] = useState<TaxiFormData[]>([]);
    const [viewAsTable, setViewAsTable] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllTaxi();
            setAllTaxi(data);
        };
        fetchData();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await deleteTaxi(id);
            navigate(0); // Reload the page
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <h1 className="my-4">All Taxi</h1>
            <Row>
                <Col xs={12} md={6} lg={4} className="mb-3">
                    <Button variant="secondary" onClick={() => setViewAsTable(!viewAsTable)}>
                        {viewAsTable ? "View as Card" : "View as Table"}
                    </Button>
                </Col>
            </Row>
            {!viewAsTable && (
                <Row>
                    {allTaxi.map((taxi: TaxiFormData) => (
                        <Col key={taxi.taxiNumber} xs={12} md={6} lg={4}>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{taxi.ownerName}</h5>
                                    <p className="card-text">{taxi.address}</p>
                                    <p className="card-text">{taxi.mobileNumber}</p>
                                    <p className="card-text">{taxi.taxiNumber}</p>
                                    <p className="card-text">{taxi.brandName}</p>
                                    <Button variant="danger" onClick={() => taxi.id !== undefined && handleDelete(taxi.id)}>Delete</Button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            )}
            {viewAsTable && (
                <Row>
                    <Col xs={12}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Owner Name</th>
                                    <th>Address</th>
                                    <th>Mobile Number</th>
                                    <th>Taxi Number</th>
                                    <th>Brand Name</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allTaxi.map((taxi: TaxiFormData) => (
                                    <tr key={taxi.taxiNumber}>
                                        <td>{taxi.ownerName}</td>
                                        <td>{taxi.address}</td>
                                        <td>{taxi.mobileNumber}</td>
                                        <td>{taxi.taxiNumber}</td>
                                        <td>{taxi.brandName}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDelete(taxi.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            )}
        </Container>
    );
}


