import type { ReactNode } from 'react';

type SkillsCardProps = {
    skills: string[];
    title: string;
    icon: ReactNode;
};

export default function SkillsCard({ title, icon, skills }: SkillsCardProps) {
    return (
        <article
            dir="ltr"
            className="group flex h-full flex-col rounded-xl border border-accent/10 bg-accent/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10"
        >
            <div className="flex items-center gap-2 mb-6">
                <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-secondary">{title}</h3>
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        className="rounded-full bg-accent/30 px-3 py-1 text-sm text-primary/60 transition-colors dark:bg-primary/30 dark:text-accent/50"
                        key={skill}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </article>
    );
}
