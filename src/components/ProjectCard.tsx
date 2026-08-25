import type { Project } from '../locals';
import { ExternalLink } from 'lucide-react';
import { LuGithub } from 'react-icons/lu';

type ProjectCardProps = {
    project: Project;
    demoLabel: string;
};

export default function ProjectCard({ project, demoLabel }: ProjectCardProps) {
    return (
        <article className="flex flex-col h-full group overflow-hidden rounded-xl border border-accent/10 bg-accent/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10">
            {/* IMAGE */}
            <div className="h-52 overflow-hidden">
                <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                    alt={project.title}
                />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 p-6">
                <h3 className="mb-3 text-xl font-bold text-secondary">
                    {project.title}
                </h3>
                <p className="mb-6 min-h-20 text-sm text-justify leading-7 text-primary/70 dark:text-accent/70">
                    {project.description}
                </p>

                {/* SKILLS */}
                <div dir="ltr" className="mb-6 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-full px-3 py-1 text-sm bg-accent/20 text-primary/50 dark:bg-primary/20 dark:text-accent/30"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* LINKS */}
                <div dir="ltr" className="mt-auto flex items-center gap-3">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 rounded-lg border border-accent/10 bg-secondary/10 px-5 py-3 text-sm font-medium text-primary dark:text-accent transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                    >
                        <LuGithub size={25} />
                        GitHub
                    </a>
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-2 rounded-lg border border-accent/10 bg-secondary/10 px-5 py-3 text-sm font-medium text-primary dark:text-accent transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                        >
                            <ExternalLink size={25} />
                            {demoLabel}
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
