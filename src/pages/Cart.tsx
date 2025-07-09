import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import products from "../assets/data/product";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
    const [quantities, setQuantities] = useState(products.map(() => 1));
    const calculateSubtotal = (price: number, quantity: number) => price * quantity;

    const total = products.reduce((acc, item, index) => {
        return acc + calculateSubtotal(item.price, quantities[index]);
    }, 0);

    const handleQuantityChange = (index: number, value: number) => {
        const newQuantities = [...quantities];
        newQuantities[index] = value < 1 ? 1 : value; // Giới hạn tối thiểu là 1
        setQuantities(newQuantities);
    };


    return (
        <div>
            <NavBar />
            <Carousel controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'img/sliders/slider_3.png'}
                        alt="First slide"
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                        }}

                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'black' }}>Cart</h3>
                        <p style={{ color: 'black' }}>Home/ Cart</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="d-flex flex-wrap justify-content-between p-5">
                {/* Table */}
                <table className="w-75 table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th className="text-center align-middle">Product</th>
                            <th className="text-center align-middle">Price</th>
                            <th className="text-center align-middle">Quantity</th>
                            <th className="text-center align-middle">Subtotal</th>
                            <th className="text-center align-middle">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={item.id}>
                                <td style={{ width: '350px', maxWidth: '350px' }}>
                                    <div
                                        className="d-flex align-items-center gap-3"
                                        style={{ width: '100%' }}
                                    >
                                        <img
                                            style={{ height: 100, width: 100, objectFit: 'cover', flexShrink: 0 }}
                                            src={item.image}
                                            alt={item.name}
                                        />
                                        <p
                                            className="m-0 text-center align-middle"
                                            style={{
                                                wordBreak: 'break-word',
                                                whiteSpace: 'normal',
                                                overflowWrap: 'break-word',
                                                flex: 1, // giúp phần chữ chiếm hết phần còn lại
                                            }}
                                        >
                                            {item.name}
                                        </p>
                                    </div>
                                </td>


                                <td className="text-center align-middle">${item.price}</td>
                                <td className="text-center align-middle">
                                    <input
                                        type="number"
                                        min={1}
                                        value={quantities[index]}
                                        onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                                        className="form-control text-center"
                                        style={{ width: 60, margin: "auto" }}
                                    />
                                </td>

                                <td className="text-center align-middle">${calculateSubtotal(item.price, quantities[index]).toFixed(2)}</td>
                                <td className="text-center align-middle"><MdDelete size={20} style={{ cursor: 'pointer' }} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Totals */}
                <div className="border p-4" style={{ width: "300px", height: "200px" }}>
                    <h4>Cart Totals</h4>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <span>Subtotal:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Total:</span>
                        <span><strong>${total.toFixed(2)}</strong></span>
                    </div>
                    <Button variant="outline-dark" className="mt-3" onClick={()=>navigate('/Checkout')}>Proceed to Checkout</Button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;

