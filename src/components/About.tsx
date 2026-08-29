import type { Language } from '../locals';
import { en, fa } from '../locals';
import { GraduationCap, Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

type AboutProps = {
    language: Language;
};

export default function About({ language }: AboutProps) {
    const translations = language === 'en' ? en : fa;

    return (
        <section
            id="about"
            className="grid md:grid-cols-2 items-center justify-between gap-12 pb-45 scroll-mt-30"
        >
            <div>
                <div className="grid grid-cols-1 gap-12 mb-8">
                    <div>
                        <ScrollReveal>
                            <h2 className="text-3xl font-bold text-primary dark:text-accent sm:text-4xl mb-4">
                                {translations.about.title}
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className="max-w-3xl text-primary/60 dark:text-accent/40 sm:text-lg text-justify">
                                {translations.about.heading}
                            </h2>
                        </ScrollReveal>
                    </div>

                    <div>
                        <ScrollReveal>
                            <p className="text-base leading-8 text-justify text-primary/70 dark:text-accent/70 sm:text-lg">
                                {translations.about.description}
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-2">
                    <ScrollReveal>
                        <div className="group flex h-full flex-col rounded-xl border border-accent/10 bg-accent/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10">
                            <p className="flex gap-2 mb-4">
                                <GraduationCap size={30} />
                                <span className="font-bold text-xl">
                                    {translations.about.Education}
                                </span>
                            </p>
                            <p className=" mb-2">{translations.about.course}</p>
                            <p className="opacity-70">
                                {translations.about.university}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* {MY PICTURE} */}
            <div className="flex flex-col gap-6 items-center justify-center">
                <ScrollReveal>
                    <div className="w-45 rounded-full overflow-hidden border-2 border-accent">
                        <img src="/img/mohaddese.jpg" alt="Mohaddese Karimi" />
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className="flex flex-col">
                        <span className="font-bold text-3xl text-secondary">
                            {translations.about.name}
                        </span>
                        <span className="opacity-80 font-thin text-center">
                            {translations.about.stack}
                        </span>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div dir="ltr" className="flex justify-between gap-2">
                        <span className="bg-accent/30 text-primary/70 dark:bg-primary/40 dark:text-accent/50 rounded-full px-2 py-1">
                            JavaScript
                        </span>
                        <span className="bg-accent/30 text-primary/70 dark:bg-primary/40 dark:text-accent/50 rounded-full px-2 py-1">
                            TypeScript
                        </span>
                        <span className="bg-accent/30 text-primary/70 dark:bg-primary/40 dark:text-accent/50 rounded-full px-2 py-1">
                            Next.js
                        </span>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <a
                        href="/Mohaddese-Karimi.pdf"
                        download
                        className="group flex items-center gap-2 rounded-lg border border-accent/10 bg-secondary/20 px-5 py-3 text-sm font-medium text-primary dark:text-accent transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                    >
                        <Download size={30} />
                        <span>{translations.about.resume}</span>
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
}
