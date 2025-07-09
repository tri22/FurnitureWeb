import type { FC } from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
interface StartRenderProps {
    rating: number;
}
const StartRender: FC<StartRenderProps> = ({ rating }) => {
    const full = Math.floor(rating);
    let half = rating - full;
    const empty = 5 - full - half;
    return (
        <div style={{ width: 112, }} className="mb-3 d-flex align-items-center justify-content-center">
            {Array.from({ length: full }).map((_, i) => (
                <FaStar style={{ width: 30, padding: 0 }} key={`full-${i}`} color="#FFC107" size={20} />
            ))}
            {half != 0 && <FaRegStarHalfStroke style={{ width: 30, padding: 0 }} color="#FFC107" size={20} />}
            {Array.from({ length: empty }).map((_, i) => (
                <FaRegStar style={{ width: 30, padding: 0 }} key={`empty-${i}`} color="#FFC107" size={20} />
            ))}
        </div>

    )
}
export default StartRender