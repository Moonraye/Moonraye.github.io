import { useState } from "react";
import Card from './Card.jsx'
import projectsData from './data/projects-data.json';

export default function Projects() {
    return (
    <section id= 'projects' className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="relative overflow-hidden m-6">
            <div className="flex transition-transform duration-500 ease-in-out">
                {projectsData.map((project) => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </div>
    </section>
    )
}