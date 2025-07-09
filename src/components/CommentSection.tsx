import { Container } from "react-bootstrap";
import commentsData from "../assets/data/comments";
import StartRender from "./StartRender";
const CommentSection = () => {
    return (
        <Container className="p-5" style={{ borderTop: '1px black solid' }}>
            <h2 className="my-2">Reviews</h2>
            {commentsData.map((item) => (
                <div key={item.id} className="w-100 my-2 py-5" style={{ borderBottom: '1px gray solid' }}>
                    <div>
                        <div className="d-flex ">
                            <img style={{ height: 50, width: 50, borderRadius: 30, marginRight: 10 }} src="/img/avatar/avatar.jpg"></img>
                            <div>
                                <h5>{item.user} </h5>
                                <p>{item.date}</p>
                            </div>
                        </div>
                        <StartRender rating={item.rating} />
                        <p style={{ textAlign: 'start' }}>
                            {item.content}
                        </p>
                        {/* Ảnh review nếu có */}
                        {item.reviewImg && (
                            <div className="text-start mt-2">
                                <img
                                    style={{ height: 120, width: 120, objectFit: 'cover', borderRadius: 8 }}
                                    src={item.reviewImg}
                                    alt="Review"
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </Container>
    )
}
export default CommentSection;