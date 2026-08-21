import type { Language } from '../locals';
import { en, fa } from '../locals';
import { skillCategories } from '../data/allSkills';
import SkillsCard from './SkillsCard';

type SkillsProps = {
    language: Language;
};

export default function Skills({ language }: SkillsProps) {
    const translations = language === 'en' ? en : fa;

    return (
        <section className="pb-30">
            <h2 className="mb-4 text-3xl font-bold text-primary dark:text-accent sm:text-4xl">
                {translations.skills.title}
            </h2>

            {/* { CARD } */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((skill) => (
                    <SkillsCard
                        key={skill.id}
                        title={skill.titleKey}
                        icon={skill.icon}
                        skills={skill.skills}
                    />
                ))}
            </div>
        </section>
    );
}
