import type { Language } from '../locals';
import { en, fa } from '../locals';
import { skillCategories } from '../data/allSkills';
import SkillsCard from './SkillsCard';
import ScrollReveal from './ScrollReveal';

type SkillsProps = {
    language: Language;
};

export default function Skills({ language }: SkillsProps) {
    const translations = language === 'en' ? en : fa;

    return (
        <section id="skills" className="pb-45 scroll-mt-30">
            <ScrollReveal>
                <h2 className="text-3xl font-bold text-primary dark:text-accent sm:text-4xl">
                    {translations.skills.title}
                </h2>
            </ScrollReveal>

            <ScrollReveal>
                <p className="max-w-3xl text-primary/60 dark:text-accent/40 sm:text-lg text-justify mt-4 mb-8">
                    {translations.skills.description}
                </p>
            </ScrollReveal>

            {/* { CARD } */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((skill) => (
                    <ScrollReveal key={skill.id}>
                        <SkillsCard
                            title={skill.titleKey}
                            icon={skill.icon}
                            skills={skill.skills}
                        />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
