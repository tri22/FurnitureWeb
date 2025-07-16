import { Button, Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "../components/AdminSidebar";
import AdminNav from "../components/AdminNav";

import { use, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PaginationCom from "../components/PaginationCom";
import { toast } from "react-toastify";
import type { User } from "../assets/data/users";


const UserManagement = () => {
    const [UserList, SetUserList] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
    const totalPages = Math.ceil(UserList.length / itemPerPage);
    const indexOfLast = currentPage * itemPerPage;
    const indexOfFirst = indexOfLast - itemPerPage;
    const currentUserList = UserList.slice(indexOfFirst, indexOfLast);

    const [showModal, setShowModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(0);
    const [newRole, setNewRole] = useState('');


    const handlePageChange = (pageNumber:number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        fetchUser();
    }, []);


    const fetchUser = async () => {
        try {
            // const response = await userApi.getAllUser();
            // const data = response.data.result;
            // SetUserList(data);
        } catch (error) {
            toast.error("Failed to fetch users");
            console.error(error);
        }
    };


    const deleteUser = async (id:number) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;
        try {
            // const response = await userApi.deleteUser(id);
            // await fetchUser();
            toast.success("Delete success!");
        } catch (error:any) {
            toast.error("Failed to fetch users:", error);
        }
    }

    const handleUpdateRole = async () => {
        try {
            const updateData = {
                role: newRole
            }
            // await userApi.updateUser(selectedUserId, updateData);
            toast.success("Updated role successfully!");
            setShowModal(false);
            fetchUser(); // reload danh sách
        } catch (error) {
            toast.error("Failed to fetch users: " + error);
        }
    };


    const handleEditClick = (id:number, role:string) => {
        console.log(id)
        setSelectedUserId(id);
        setNewRole(role); // role hiện tại
        setShowModal(true);
    };


    const UserRender = ({ data }: { data: User[] }) => {
        return (
            <div className="container mt-3">
                <div className="table-responsive rounded border bg-white shadow-sm">
                    <table className="table table-hover align-middle mb-0 text-center">
                        <thead className="table-light">
                            <tr>

                                <th>{'name'}</th>
                                <th>{'email'}</th>
                                <th>{'phone'}</th>
                                <th>{'birthday'}</th>
                                <th>{'role'}</th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td className="fw-semibold">{row.fullName}</td>
                                    <td>{row.email}</td>
                                    <td>{row.phone}</td>
                                    <td>{row.birthday}</td>
                                    <td>{row.role}</td>
                                    <td>
                                        <Button className="me-2" onClick={() => handleEditClick(row.id, row.role)}><FaEdit /></Button>
                                        <Button onClick={() => deleteUser(row.id)}><MdDelete /></Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };


    return (
        <div style={{ backgroundColor: '#F5F6FA', minHeight: "100vh" }}>
            <Container fluid>
                <Row>
                    <Col md={2} className='p-0' style={{ minHeight: "100vh" }}>
                        <AdminSidebar></AdminSidebar>
                    </Col>
                    <Col md={10} style={{ minHeight: "100vh" }}>

                        <AdminNav title={'title'} />

                        <UserRender data={currentUserList}></UserRender>
                        <PaginationCom currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}></PaginationCom>
                        {showModal && (
                            <div className="modal show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">

                                            <h5 className="modal-title">{'editUserRole'}</h5>
                                            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <label className="form-label">{'selectRole'}</label>
                                            <select className="form-select" value={newRole} onChange={(e) => setNewRole(e.target.value)}>
                                                <option value="ADMIN">{'admin'}</option>
                                                <option value="USER">{'user'}</option>
                                            </select>
                                        </div>
                                        <div className="modal-footer">
                                            <Button variant="secondary" onClick={() => setShowModal(false)}>{'cancel'}</Button>
                                            <Button variant="primary" onClick={handleUpdateRole}>{'update'}</Button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default UserManagement;