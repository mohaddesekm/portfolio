import { useState } from 'react';
import type { Language } from '../locals';
import { en, fa } from '../locals';
import ProjectCard from './ProjectCard';

type ProjectsProps = {
    language: Language;
};

export default function Projects({ language }: ProjectsProps) {
    const translations = language === 'en' ? en : fa;

    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll
        ? translations.projects.item
        : translations.projects.item.slice(0, 3);

    return (
        <section className="pb-30">
            {/* HEAD */}
            <div className="mb-12">
                <p className="mb-4 text-3xl font-bold text-primary dark:text-accent sm:text-4xl">
                    {translations.projects.title}
                </p>
                <p className="max-w-3xl text-primary/70 dark:text-accent/70 sm:text-lg text-justify">
                    {translations.projects.description}
                </p>
            </div>

            {/* CARD */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        demoLabel={translations.projects.demo}
                    />
                ))}
            </div>

            <button
                onClick={() => setShowAll((prev) => !prev)}
                className="mt-10 block m-auto rounded-lg bg-primary px-6 py-3 font-medium text-accent transition-all hover:scale-105 hover:shadow-md hover:shadow-primary/30 cursor-pointer"
            >
                {showAll
                    ? translations.projects.showLess
                    : translations.projects.showAll}
            </button>
        </section>
    );
}
