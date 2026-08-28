import { useState } from 'react';
import type { Language } from '../locals';
import { en, fa } from '../locals';
import ProjectCard from './ProjectCard';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

type ProjectsProps = {
    language: Language;
};

export default function Projects({ language }: ProjectsProps) {
    const translations = language === 'en' ? en : fa;

    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll
        ? translations.projects.items
        : translations.projects.items.slice(0, 3);

    return (
        <section id="projects" className="pb-45 scroll-mt-30">
            {/* HEAD */}
            <div className="mb-12">
                <ScrollReveal>
                    <p className="mb-4 text-3xl font-bold text-primary dark:text-accent sm:text-4xl">
                        {translations.projects.title}
                    </p>
                </ScrollReveal>
                <ScrollReveal>
                    <p className="max-w-3xl text-primary/60 dark:text-accent/40 sm:text-lg text-justify">
                        {translations.projects.description}
                    </p>
                </ScrollReveal>
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

            {translations.projects.items.length > 3 && (
                <ScrollReveal>
                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="flex items-center justify-center gap-2 mt-10 m-auto rounded-lg border border-accent/10 bg-secondary/10 px-5 py-3 text-sm font-medium text-primary dark:text-accent transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                    >
                        {showAll
                            ? translations.projects.showLess
                            : translations.projects.showAll}
                        {showAll ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </ScrollReveal>
            )}
        </section>
    );
}
