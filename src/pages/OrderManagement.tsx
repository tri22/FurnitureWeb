import { Col, Container, Row, Card, Button } from "react-bootstrap";
import AdminSidebar from "../components/AdminSidebar";
import AdminNav from "../components/AdminNav";
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { FaArrowDown, FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";

import PaginationCom from "../components/PaginationCom";
import { toast } from "react-toastify";
import type { Order } from "../assets/data/orders";


const OrderManagement = () => {

  const [orderList, setOrderList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;
  const totalPages = Math.ceil(orderList.length / itemPerPage);
  const indexOfLast = currentPage * itemPerPage;
  const indexOfFirst = indexOfLast - itemPerPage;
  const currentOrderList = orderList.slice(indexOfFirst, indexOfLast);

  const [showModal, setShowModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(0);
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      // const response = await orderApi.getAllOrder();
      // setOrderList(response.data.result || []);
    } catch (error) {
      toast.error("Error fetching order list.");
    }
  };



  const handleEditClick = (id:number, status:string) => {
    setSelectedOrderId(id);
    setNewStatus(status);
    setShowModal(true);
  };

  const handleUpdateStatus = async () => {
    try {
      // await orderApi.updateOrder(selectedOrderId, { status: newStatus });
      // toast.success(t("order.statusUpdated"));
      // setShowModal(false);
      // fetchOrder();
    } catch (error) {
      toast.error("Failed to update status: " +  error);
    }
  };

  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filterData = [
    { value: "date" },
    { value: "status" },
  ];

  type FilterItem = {
  value: string;
};

const Filter = ({ filterData }: { filterData: FilterItem[] }) => (
    <Row className="g-3 my-4 mx-2 px-1">
      <Col md="1" className="p-0 me-1">
        <Card className="shadow-sm border-0 bg-white text-center p-2">
          <div className="d-flex flex-row align-items-center gap-2">
            <CiFilter size={20} />
            <span className="fw-semibold">{"filter"}</span>
          </div>
        </Card>
      </Col>
      {filterData.map((item, idx) => (
        <Col key={idx} md="2" className="p-0 me-1">
          <Card className="shadow-sm border-0 bg-white text-center p-2">
            <div className="d-flex flex-row align-items-center gap-2">
              <span className="fw-semibold">{item.value}</span>
              <FaArrowDown className="text-danger" size={14} />
            </div>
          </Card>
        </Col>
      ))}
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

  const OrderRender = ({ data }:{data:Order[]}) => (
    <div className="container mt-3">
      <div className="table-responsive rounded border bg-white shadow-sm">
        <table className="table table-hover align-middle mb-0 text-center">
          <thead className="table-light">
            <tr>
              <th>{"username"}</th>
              <th>{"totalValue"}</th>
              <th>{"date"}</th>
              <th>{"quantity"}</th>
              <th>{"status"}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="fw-semibold">{row.user.name}</td>
                <td>{  row.totalPrice }</td>
                <td>{row.orderDate}</td>
                <td>{row.totalQuantity}</td>
                <td>
                  <span className={`badge rounded-pill px-3 py-2 ${row.status === "COMPLETE"
                      ? "bg-success-subtle text-success"
                      : row.status === "PROCESSING"
                        ? "bg-primary-subtle text-primary"
                        : "bg-secondary-subtle text-secondary"
                    }`}>
                    {row.status}
                  </span>
                </td>
                <td>
                  <Button className="me-2" onClick={() => handleEditClick(row.id, row.status)}>
                    <FaEdit />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#F5F6FA", minHeight: "100vh" }}>
      <Container fluid>
        <Row>
          <Col md={2} className="p-0" style={{ minHeight: "100vh" }}>
            <AdminSidebar />
          </Col>
          <Col md={10} style={{ minHeight: "100vh" }}>
            <AdminNav title={"title"} />
            <Filter filterData={filterData} />
            <OrderRender data={currentOrderList} />
            <PaginationCom
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={totalPages}
            />
            {showModal && (
              <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{"editStatus"}</h5>
                      <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                    </div>
                    <div className="modal-body">
                      <label className="form-label">{"selectStatus"}</label>
                      <select
                        className="form-select"
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                      >
                        <option value="CANCEL">{"statusCancel"}</option>
                        <option value="COMPLETE">{"statusComplete"}</option>
                      </select>
                    </div>
                    <div className="modal-footer">
                      <Button variant="secondary" onClick={() => setShowModal(false)}>
                        {"cancel"}
                      </Button>
                      <Button variant="primary" onClick={handleUpdateStatus}>
                        {"update"}
                      </Button>

                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderManagement;
