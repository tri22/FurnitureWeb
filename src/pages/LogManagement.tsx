import { Col, Container, Row, Button, Card, Dropdown } from "react-bootstrap";
import AdminSidebar from "../components/AdminSidebar";
import AdminNav from "../components/AdminNav";
import { useEffect, useState } from "react";
import PaginationCom from "../components/PaginationCom";
import { FaArrowDown } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import type { Log } from "../assets/data/logs";

const LogManagement = () => {
    const [record, setRecord] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(5);
    const totalPages = Math.ceil(record.length / itemPerPage);
    const indexOfLast = currentPage * itemPerPage;
    const indexOfFirst = indexOfLast - itemPerPage;
    const currentList = record.slice(indexOfFirst, indexOfLast);


    const fetchRecord = async () => {
        try {
            // const response = await adminApi.getAll);
            // console.log(response.data.result)
            // setRecord(response.data.result)
        } catch (err) {
            console.error("Error loading data", err);

        }

    }

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    type FilterProps = {
        setItemsPerPage: (value: number) => void;
    };

    const Filter = ({ setItemsPerPage }: FilterProps) => {
        const options = [5, 10, 15, 20];
        return (
            <Row className="g-3 my-4 mx-2 px-1">
                {/* Dropdown Filter */}
                <Col md="1" className="p-0 me-1">
                    <Card className="shadow-sm border-0 bg-white p-2">
                        <div className="d-flex flex-row align-items-center gap-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="light" size="sm" className="fw-semibold border-0 p-0">
                                    {"itemsPerPage"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {options.map((val) => (
                                        <Dropdown.Item key={val} onClick={() => setItemPerPage(val)}>
                                            {val}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card>
                </Col>

                {/* Date */}
                <Col md="1" className="p-0 me-1">
                    <Card className="shadow-sm border-0 bg-white text-center p-2">
                        <div className="d-flex flex-row align-items-center gap-2">
                            <span className="fw-semibold">{"date"}</span>
                            <FaArrowDown className="text-danger" size={14} />
                        </div>
                    </Card>
                </Col>

                {/* Reset */}
                <Col md="1" className="p-0 me-1">
                    <Card className="shadow-sm border-0 bg-white text-center p-2">
                        <div className="d-flex flex-row align-items-center gap-2">
                            <GrPowerReset size={18} />
                            <span className="fw-semibold">{"reset"}</span>
                        </div>
                    </Card>
                </Col>
            </Row>
        );
    };

    const TableRender = ({ data }: { data: Log[] }) => {
        const safeParse = (jsonStr: string) => {
            try {
                return JSON.stringify(JSON.parse(jsonStr), null, 2);
            } catch (e) {
                return jsonStr; // Nếu không parse được thì hiển thị chuỗi gốc
            }
        };
        return (
            <div className="container mt-3">
                <div className="table-responsive rounded border bg-white shadow-sm">
                    <table className="table table-hover align-middle mb-0 text-center">
                        <thead className="table-light">
                            <tr>
                                <th>{"id"}</th>
                                <th>{"action"}</th>
                                <th>{"dataIn"}</th>
                                <th>{"dataOut"}</th>
                                <th>{"date"}</th>
                                <th>{"ip"}</th>
                                <th>{"level"}</th>
                                <th>{"resource"}</th>
                                <th>{"user"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td className="fw-semibold">{row.id}</td>
                                    <td>{row.action}</td>
                                    <td>
                                        <pre style={{ textAlign: 'left' }}>
                                            {safeParse(row.dataIn)}
                                        </pre>
                                    </td>
                                    <td>
                                        <pre style={{ textAlign: 'left' }}>
                                            {safeParse(row.dataOut)}
                                        </pre>
                                    </td>
                                    <td>{row.date}</td>
                                    <td>{row.ip}</td>
                                    <td>{row.level}</td>
                                    <td>{row.resource}</td>
                                    <td>{row.user ? row.user.id : 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div style={{ backgroundColor: '#F5F6FA' }}>
            <Container fluid>
                <Row>
                    <Col md={2} className='p-0' style={{ minHeight: "100vh" }}>
                        <AdminSidebar></AdminSidebar>
                    </Col>
                    <Col md={10} style={{ minHeight: "100vh" }}>
                        <AdminNav title="title"></AdminNav>
                        <Filter setItemsPerPage={setItemPerPage} />
                        <TableRender data={currentList} />
                        <PaginationCom currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}></PaginationCom>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default LogManagement;

