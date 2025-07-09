import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import products from "../assets/data/product";
const CartPreview =()=>{
    const navigate = useNavigate()
    const quantities = (products.map(() => 1));
    const calculateSubtotal = (price: number, quantity: number) => price * quantity;

    const total = products.reduce((acc, item, index) => {
        return acc + calculateSubtotal(item.price, quantities[index]);
    }, 0);
    return(
        <Container style={{width:300}}>
            {products.slice(0,2).map((item)=>(
                <div className="my-3">
                    <div className="d-flex">
                        <img style={{width:60,height:60,borderRadius:10,marginRight:10}} src={item.image}  />
                        <div>
                            <p style={{margin:'auto 0'}}>{item.name}</p>
                            <p style={{margin:'auto 0'}}>1 x $ {item.price}</p>
                        </div>
                    </div>
                </div>
            ))}
            <p style={{margin:'10px 0'}}> <strong>Total: $ </strong> {total}</p>
            <Button variant="outline-dark" onClick={()=> navigate('/Cart')}>
                View more
            </Button>
        </Container>
    )
}

export default CartPreview;