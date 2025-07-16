
import { Col, Row,  Dropdown } from 'react-bootstrap';
import { Link,  useNavigate } from 'react-router-dom';
import { LuSquareMenu } from 'react-icons/lu';
import { MdOutlineAccountCircle } from 'react-icons/md';

type NavProps={
  title:string
}
const TopNavbar = ( {title}:NavProps ) => {


  const navigate = useNavigate();
  const logout = () => {
    navigate("/login"); // Optional: chuyển hướng sau khi logout
  };


  return (
    <Row className="flex items-center justify-between px-4 py-2 bg-white shadow-sm pt-4">
      {/* Left: Menu + Search */}
      <Col md={4}>
        <h2>{title}</h2>
      </Col>
      <Col md={5}></Col>
      {/* Right: Notification, Language, User */}
      <Col md={3}>
        <Row className="justify-between">
          
          {/* User Info */}
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className='btn-menu-dropdown d-flex align-items-center'>
                <MdOutlineAccountCircle />
                <LuSquareMenu />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/Profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/AdminHome">
                  {/* Hiển thị thông tin người dùng */}
                  Admin
                </Dropdown.Item>
                <Dropdown.Item onClick={logout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

        </Row>
      </Col>
    </Row>
  );
};

export default TopNavbar;
