import { useState } from "react";
export default function Card({project}) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
            <div className="bg-white dark:bg-gray-800 h-[350px] flex flex-col rounded-lg overflow-hidden shadow-lg px-4">
                <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-700 text-sm md:text-xl dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="justify-between items-center flex gap-4 mt-auto">
                        <a className = 'text-emerald-600 dark:text-emerald-400 hover:underline font-medium' href= {project.github} target="_blank">GitHub</a>
                        <a className = 'text-emerald-600 dark:text-emerald-400 hover:underline font-medium' href= {project.live} target="_blank">Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )}