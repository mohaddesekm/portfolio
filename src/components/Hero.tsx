import type { Language } from '../locals';
import { en, fa } from '../locals';

type HeroProps = {
    language: Language;
};

export default function Hero({ language }: HeroProps) {
    const translations = language === 'en' ? en : fa;

    return (
        <section id="home" className="grid py-55 gap-12 lg:grid-cols-2">
            <div className="w-full h-full max-w-3xl">
                <p className="mb-4 text-lg font-medium text-secondary">
                    {language === 'en' && translations.hero.greeting}
                </p>

                <h1 className="text-4xl font-bold sm:text-6xl">
                    <div className="flex flex-wrap items-center gap-2 text-accent">
                        {translations.hero.name}

                        <span className="text-primary dark:text-secondary">
                            {translations.hero.family}
                        </span>
                    </div>
                </h1>

                <h2 className="mt-5 text-xl font-thin text-primary dark:text-accent sm:text-2xl opacity-90">
                    {translations.hero.stack}
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-primary/70 dark:text-accent/70 sm:text-lg">
                    {translations.hero.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary"
                    >
                        {translations.hero.projectsButton}
                    </a>

                    <a
                        href="#contact"
                        className="rounded-lg border border-secondary px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary/10 dark:text-accent"
                    >
                        {translations.hero.contactButton}
                    </a>
                </div>
            </div>

            <div className="flex w-full h-80 lg:h-full items-center justify-center">
                <div className="w-full h-full max-w-xl rounded-2xl border border-primary/20 bg-primary/5 dark:border-accent/10 dark:bg-primary-dark/50"></div>
            </div>
        </section>
    );
}
