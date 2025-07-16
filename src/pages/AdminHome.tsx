import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Form, Container } from 'react-bootstrap';
import {
    FaBan, FaBox, FaChartLine, FaArrowUp, FaArrowDown,
} from 'react-icons/fa';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';
import NavBar from '../components/NavBar';
import AdminNav from '../components/AdminNav';
import AdminSidebar from '../components/AdminSidebar';
const chartData = [
    { name: 'Mon', value: 10 },
    { name: 'Tue', value: 15 },
    { name: 'Wed', value: 5 },
    { name: 'Thu', value: 12 },
    { name: 'Fri', value: 18 },
    { name: 'Sat', value: 22 },
    { name: 'Sun', value: 30 },
];


const Home = () => {

    const DashboardStats = () => (
        <Row className="g-4 my-4">
            <StatCard
                title={"Total Order"}
                value={8}
                icon={<FaBox size={32} className="text-white" />}
                iconBg="bg-warning"
                trend="up"
                trendValue="+1.3%"
                trendNote={"upFromLastWeek"}
            />

            <StatCard
                title={"Total Sales"}
                value={1}
                icon={<FaChartLine size={32} className="text-white" />}
                iconBg="bg-success"
                trend="down"
                trendValue="-4.3%"
                trendNote={"downFromLastWeek"}
            />

            <Col md={6} lg={3}>
                <Card className="shadow-sm border-0 rounded-4 h-100">
                    <Card.Body className="d-flex flex-column gap-3">
                        <div className="fw-bold mb-0">{"bestSelling"}</div>
                        <div className="p-2 rounded-3 d-flex align-items-center justify-content-center">
                            <img
                                src={''}
                                alt="product imgage"
                                style={{ height: "80px", width: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <h4 className="fw-bold mb-0">
                            {"loading"}
                        </h4>
                    </Card.Body>
                </Card>
            </Col>

            <StatCard
                title={"cancelledOrders"}
                value={1}
                icon={<FaBan size={32} className="text-white" />}
                iconBg="bg-danger"
                trend="up"
                trendValue="+8.5%"
                trendNote={"upFromLastWeek"}
            />
        </Row>
    );
    type StatCardProps = {
        title: string,
        value: number,
        icon: React.ReactNode
        iconBg: string,
        trend: string,
        trendValue: string,
        trendNote: string
    }
    const StatCard = ({ title,
        value,
        icon,
        iconBg,
        trend,
        trendValue,
        trendNote }: StatCardProps) => (
        <Col md={6} lg={3}>
            <Card className="shadow-sm border-0 rounded-4 h-100">
                <Card.Body className="d-flex flex-column gap-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold mb-0">{title}</div>
                        <div className={`p-2 rounded-3 d-flex align-items-center justify-content-center ${iconBg}`}>
                            {icon}
                        </div>
                    </div>
                    <h3 className="fw-bold mb-0">{value}</h3>
                    <div className="d-flex align-items-center gap-2">
                        {trend === 'up' ? <FaArrowUp className="text-success" /> : <FaArrowDown className="text-danger" />}
                        <span className={`fw-semibold ${trend === 'up' ? 'text-success' : 'text-danger'}`}>{trendValue}</span>
                        <span className="text-muted small">{trendNote}</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );





    const SalesChart = () => (
        <Card className="shadow-sm border-0 rounded-4 p-5 mt-4">
            <Row className="align-items-center mb-3">
                <Col>
                    <h5 className="fw-bold mb-0">{"salesDetails"}</h5>
                </Col>
                <Col xs="auto">
                    <Form.Select
                        size="sm"
                        value={1}

                    >
                        <option value="This Week">{"thisWeek"}</option>
                        <option value="This month">{"thisMonth"}</option>
                        <option value="This year">{"thisYear"}</option>
                    </Form.Select>
                </Col>
            </Row>

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4e7cf3" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#4e7cf3" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis
                        tickFormatter={(val) =>  val }
                        tick={{ fontSize: 12 }}
                    />
                    <Tooltip formatter={(value: any) => `${value}`} />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#4e7cf3"
                        fillOpacity={1}
                        fill="url(#colorBlue)"
                        dot={{ r: 3 }}
                        activeDot={{ r: 6 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );



    return (
        <div style={{ backgroundColor: '#F5F6FA' }}>
            <Container fluid>
                <Row>
                    <Col md={2} className="p-0" style={{ minHeight: "100vh" }}>
                        <AdminSidebar></AdminSidebar>
                    </Col>
                    <Col md={10} style={{ minHeight: "100vh" }}>
                        <AdminNav title="dashboard" />
                        <DashboardStats />
                        <SalesChart />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
