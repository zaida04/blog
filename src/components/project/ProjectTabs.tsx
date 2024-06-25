import { useState } from "react";
import { project_sections, projects_data } from "../../content/data/projects";
import ProjectCard from "./ProjectCard";

export function ProjectTabbar() {
    const tabs = Object.keys(project_sections);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const projects = projects_data[project_sections[activeTab].slug];

    return (
        <>
            <div className="flex flex-row mb-4">
                <div className="flex flex-row gap-4 mb-4">
                    {tabs.map((tab) => {
                        const isSelected = activeTab === tab;

                        return <button
                            key={tab}
                            className={`px-4 py-2 rounded ${isSelected ? 'bg-slate-600 text-white' : 'bg-slate-800 text-gray-400'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    })}
                </div>
            </div>

            <div className="md:border-l-2 border-slate-700 md:pl-8 h-[21.5rem]">
                <h3 className="font-normal">{activeTab}</h3>
                <p className="text-base w-[90%] pb-4">{project_sections[activeTab].description}</p>
                <div className="flex flex-row gap-4 overflow-x-auto">
                    {projects.map((project) => (
                        <ProjectCard {...project} />
                    ))}
                </div>
            </div>
        </>
    );
}