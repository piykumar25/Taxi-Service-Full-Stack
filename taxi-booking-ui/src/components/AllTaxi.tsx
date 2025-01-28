import React, { useState, useEffect } from "react";
import { getAllTaxi } from "../services/TaxiService.ts";
import { TaxiFormData } from "../types/ITaxi";
import { Container, Row, Col, Table } from "react-bootstrap";

export function AllTaxi() {

    const [allTaxi, setAllTaxi] = useState<TaxiFormData[]>([]);
    const [viewAsTable, setViewAsTable] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllTaxi();
            setAllTaxi(data);
        };
        fetchData();
    }, []);

    return (
        <Container>
            <h1 className="my-4">All Taxi</h1>
            <Row>
                <Col xs={12} md={6} lg={4} className="mb-3">
                    <button className="btn btn-secondary" onClick={() => setViewAsTable(!viewAsTable)}>
                        {viewAsTable ? "View as Card" : "View as Table"}
                    </button>
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




