import { FaHeart } from "react-icons/fa";

const LikeCounter = () => {
    return (
        <div className="flex flex-row items-center">
            <button className="flex flex-row gap-2">
                <FaHeart size={30}/>
                <p>0</p>
            </button>
        </div>
    )
}

export default LikeCounter;
