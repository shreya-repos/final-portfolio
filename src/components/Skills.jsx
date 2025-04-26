import myImage from '../assets/me.jpg';
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { GrNode, GrMysql } from "react-icons/gr";
import { useState, useEffect } from 'react';

const skills = [
    { icon: <FaReact />, name: "React.js" },
    { icon: <DiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <GrNode />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <GrMysql />, name: "MySQL" },
];

const Skills = ({theme}) => {

    return (
        <div className={`-mx-[33rem] mt-[3rem] w-[650px] h-[450px] flex flex-col items-center justify-center p-10 rounded-3xl shadow-lg max-w-xl text-center border 
            ${theme === 'pink' ? 'bg-[#ffebef] border-pink-200 text-pink-800 shadow-[10px_10px_30px_#e0a9b1,-10px_-10px_30px_#fff]' : 
            'bg-[#1a1a1a] border-gray-700 text-white shadow-[10px_10px_30px_#333,-10px_-10px_30px_#000]'}`}>
            
            <img 
                src={myImage} 
                className={`rounded-full w-44 h-44 border-4 shadow-lg mb-6 transition-all hover:scale-105 
                    ${theme === 'pink' ? 'border-pink-400 shadow-[5px_5px_15px_#e0a9b1,-5px_-5px_15px_#fff]' : 'border-gray-500 shadow-[5px_5px_15px_#333,-5px_-5px_15px_#000]'}`} 
                alt="Shreya Singhal"
            />
            <h1 className={`text-4xl font-extrabold drop-shadow-lg mb-6 tracking-wide 
                ${theme === 'pink' ? 'text-pink-600' : 'text-white'}`}>
                Shreya Singhal
            </h1>
            <div className="grid grid-cols-3 gap-4 px-4 mt-3">
                {skills.map((skill, index) => (
                    <div key={index} className={`w-38 h-10 flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 cursor-pointer 
                        ${theme === 'pink' ? 'bg-[#fddde6] text-pink-800 shadow-[5px_5px_15px_#e0a9b1,-5px_-5px_15px_#fff] hover:shadow-[inset_5px_5px_10px_#e0a9b1,inset_-5px_-5px_10px_#fff]' : 
                        'bg-[#2a2a2a] text-white shadow-[5px_5px_15px_#333,-5px_-5px_15px_#000] hover:shadow-[inset_5px_5px_10px_#333,inset_-5px_-5px_10px_#000]'}`}>
                        {skill.icon}
                        <p className="text-sm">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
