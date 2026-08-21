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
                            className="rounded-full bg-accent/30 px-3 py-1 text-sm text-primary/60 dark:bg-primary/30 dark:text-accent/40"
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
                        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-accent transition-all hover:scale-105 hover:shadow-md hover:shadow-primary/30"
                    >
                        <LuGithub size={25} />
                        GitHub
                    </a>
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-accent transition-all hover:scale-105 hover:shadow-md hover:shadow-primary/30"
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
