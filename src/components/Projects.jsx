import Cards from './Cards';

const Projects = ({ theme }) => {
    // Theme-based styling
    const bgColor = theme === 'pink' ? 'bg-[#ffebef] border-pink-200 text-pink-800 shadow-[10px_10px_30px_#e0a9b1,-10px_-10px_30px_#fff]' : 
    'bg-[#1a1a1a] border-gray-700 text-white shadow-[10px_10px_30px_#333,-10px_-10px_30px_#000]';

    return (
        <div className={`w-[850px] h-[450px] mt-11 max-w-5xl py-12 px-6 rounded-lg shadow-md transition-all duration-300 ${bgColor}`}>
            <h1 className={`text-2xl font-bold text-center mb-6 ${theme==='pink' ? "text-pink-800" : "text-white"}`}>My Projects</h1>
            <Cards theme={theme} />
        </div>
    );
};

export default Projects;

