import { MdOutlineArrowRightAlt } from "react-icons/md";

const Cards = ({ theme }) => {
    const cardData = [
        {
            img: "shreya",
            title: "Crypto Trading Simulator",
            description: "Practice crypto trading using paper money.",
            link: "https://crypto-frontend-khaki.vercel.app/"
        },
        {
            img: "nsc",
            title: "BVICAM NSC Website",
            description: "Website for BVICAM's National Students' Convention, facilitating event information.",
            link: "https://bvicam-nsc-25.vercel.app/"
        },
        {
            img: "razorpay",
            title: "Razorpay Clone",
            description: "Razorpay clone using Tailwind.",
            link: "#"
        }
    ];

    // Theme-based styling
    const cardBg = theme === "white" ? "bg-gray-800 text-white" : "bg-white text-gray-900";
    const cardHover = theme === "white" ? "hover:shadow-gray-600" : "hover:shadow-pink-300";
    const linkColor = theme === "white" ? "text-pink-400" : "text-blue-500";

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
            {cardData.map((item, index) => (
                <div key={index} className={`flex flex-col justify-between h-[300px] w-[250px] rounded-2xl shadow-lg p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${theme === 'pink' ? 'bg-[#fddde6] text-pink-800 shadow-[5px_5px_15px_#e0a9b1,-5px_-5px_15px_#fff] hover:shadow-[inset_5px_5px_10px_#e0a9b1,inset_-5px_-5px_10px_#fff]' : 
                        'bg-[#2a2a2a] text-white shadow-[5px_5px_15px_#333,-5px_-5px_15px_#000] hover:shadow-[inset_5px_5px_10px_#333,inset_-5px_-5px_10px_#000]'}`}>
                    <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 font-bold text-lg">{item.img}</span>
                    </div>
                    <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
                    <p className="mt-2 text-sm">{item.description}</p>
                    <a href={item.link} className={`mt-4 flex items-center font-medium hover:underline ${linkColor}`}>
                        View Project
                        <MdOutlineArrowRightAlt className="ml-1 text-xl mt-1" />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Cards;
