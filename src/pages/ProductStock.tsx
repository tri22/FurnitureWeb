import { Col, Container, Row, Button, Card, Dropdown } from "react-bootstrap";
import AdminSidebar from "../components/AdminSidebar";
import AdminNav from "../components/AdminNav";
import { useEffect, useState } from "react";

import { IoMdAdd, IoIosListBox } from "react-icons/io";
import PaginationCom from "../components/PaginationCom";
import { FaArrowDown } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { MdInventory } from "react-icons/md";
import type { RemainRecord, StockRecord } from "../assets/data/stockRecords";


const ProductStock = () => {


    const [record, setRecord] = useState([]);
    const [showRemainTable, setShowRemainTable] = useState(false);
    const [remainData, setRemainData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(5);

    const activeData = showRemainTable ? Object.values(remainData) : record;
    const totalPages = Math.ceil(activeData.length / itemPerPage);
    const indexOfLast = currentPage * itemPerPage;
    const indexOfFirst = indexOfLast - itemPerPage;
    const currentList = activeData.slice(indexOfFirst, indexOfLast);

    useEffect(() => {
        fetchRecord();
        fetchRemain();
    }, []);

    const fetchRecord = async () => {
        try {
            // const response = await adminApi.getAllStockInRecord();
            // setRecord(response.data.result);
        } catch (err) {
            console.error("Error loading data", err);
        }
    };

    const fetchRemain = async () => {
        try {
            // const response = await adminApi.getRemain();
            // setRemainData(response.data.result);
        } catch (err) {
            console.error("Error loading data", err);
        }
    };

    const handlePageChange = (pageNumber:number) => {
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
                <Col md="1" className="p-0 me-1">
                    <Card className="shadow-sm border-0 bg-white p-2">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" size="sm" className="fw-semibold border-0 p-0">
                                {"itemsPerPage"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {options.map((val) => (
                                    <Dropdown.Item key={val} onClick={() => setItemsPerPage(val)}>
                                        {val}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card>
                </Col>

                <Col md="1" className="p-0 me-1">
                    <Card className="shadow-sm border-0 bg-white text-center p-2">
                        <div className="d-flex flex-row align-items-center gap-2">
                            <span className="fw-semibold">{"date"}</span>
                            <FaArrowDown className="text-danger" size={14} />
                        </div>
                    </Card>
                </Col>

                <Col md="1" className="p-0 me-1">
                    <Card className="shadow-sm border-0 bg-white text-center p-2">
                        <div className="d-flex flex-row align-items-center gap-2">
                            <GrPowerReset size={18} />
                            <span className="fw-semibold">{"reset"}</span>
                        </div>
                    </Card>
                </Col>

                <Col md="2" className="p-0 me-1">
                    <Card
                        className="shadow-sm border-0 bg-white text-center p-2"
                        onClick={() => {
                            setShowRemainTable(!showRemainTable);
                            setCurrentPage(1);
                        }}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="d-flex flex-row align-items-center gap-2">
                            {showRemainTable ? (
                                <>
                                    <MdInventory size={18} />
                                    <span className="fw-semibold">{"remain"}</span>
                                </>
                            ) : (
                                <>
                                    <IoIosListBox size={18} />

                                    <span className="fw-semibold">{"records"}</span>
                                </>
                            )}
                        </div>
                    </Card>
                </Col>
            </Row>
        );
    };

    const TableRender = ({ data }:{data:StockRecord[]}) => (
        <div className="container mt-3">
            <div className="table-responsive rounded border bg-white shadow-sm">
                <table className="table table-hover align-middle mb-0 text-center">
                    <thead className="table-light">
                        <tr>
                            <th>{"name"}</th>
                            <th>{"image"}</th>
                            <th>{"date"}</th>
                            <th>{"quantity"}</th>
                            <th>{"price"}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="fw-semibold">{row.product.name}</td>
                                <td>
                                    <img src={row.product.image} alt="product" style={{ height: "50px", objectFit: "cover" }} />
                                </td>
                                <td>{row.createAt}</td>
                                <td>{row.quantity}</td>
                                <td>${row.price}</td>
                                <td>
                                    <Button className="me-2"><IoMdAdd /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const RemainTable = ({ data }:{data:RemainRecord[]}) => {
        const list = Object.values(data);
        return (
            <div className="container mt-3">
                <div className="table-responsive rounded border bg-white shadow-sm">
                    <table className="table table-hover align-middle mb-0 text-center">
                        <thead className="table-light">
                            <tr>
                                <th>{"id"}</th>
                                <th>{"name"}</th>
                                <th>{"image"}</th>
                                <th>{"remain"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((row, index) => (
                                <tr key={index}>
                                    <td className="fw-semibold">{row.id}</td>
                                    <td className="fw-semibold">{row.name}</td>
                                    <td>
                                        <img src={row.image} alt="product" style={{ height: "50px", objectFit: "cover" }} />
                                    </td>
                                    <td>{row.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return (
        <div style={{ backgroundColor: '#F5F6FA' }}>
            <Container fluid>
                <Row>
                    <Col md={2} className="p-0" style={{ minHeight: "100vh" }}>
                        <AdminSidebar />
                    </Col>
                    <Col md={10} style={{ minHeight: "100vh" }}>
                        <AdminNav title={"title"} />
                        <Filter setItemsPerPage={setItemPerPage} />
                        {showRemainTable
                            ? <RemainTable data={currentList} />
                            : <TableRender data={currentList} />}
                        <PaginationCom
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                            totalPages={totalPages}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductStock;
