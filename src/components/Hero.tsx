import type { Language } from '../locals';
import { en, fa } from '../locals';
import { LuGithub } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa6';

type HeroProps = {
    language: Language;
};

export default function Hero({ language }: HeroProps) {
    const translations = language === 'en' ? en : fa;

    return (
        <section
            id="home"
            className="text-center lg:text-left grid justify-center pt-55 pb-45 gap-12 lg:grid-cols-2"
        >
            {/* HERO LEFT SECTION */}

            <div className="w-full h-full">
                <p className="mb-4 text-lg font-medium text-secondary">
                    {language === 'en' && translations.hero.greeting}
                </p>

                <h1 className="text-center text-4xl font-bold sm:text-6xl">
                    <div className="flex flex-wrap items-center justify-center lg:justify-normal gap-2 text-primary/60 dark:text-accent">
                        {translations.hero.name}

                        <span className="text-primary dark:text-secondary">
                            {translations.hero.family}
                        </span>
                    </div>
                </h1>

                <h2 className="mt-5 text-xl font-thin text-primary dark:text-accent sm:text-2xl opacity-90">
                    {translations.hero.stack}
                </h2>

                <p className="mt-6 text-[14px] leading-7 text-primary/70 dark:text-accent/70 sm:text-lg">
                    {translations.hero.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-normal gap-8">
                    <div className='flex items-center justify-center gap-4'>
                        <a
                            href="#projects"
                            className="rounded-lg bg-secondary/20 border border-accent/10 px-5 py-3 text-sm font-medium text-primary dark:text-accent transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10"
                        >
                            {translations.hero.projectsButton}
                        </a>

                        <a
                            href="#contact"
                            className="rounded-lg border border-secondary px-5 py-3 text-sm font-medium text-primary hover:bg-secondary/20 dark:text-accent  transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10"
                        >
                            {translations.hero.contactButton}
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        <a
                            href="https://github.com/mohaddesekm"
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary/50 scale-150 hover:scale-180 hover:text-primary transition-all duration-300 dark:text-accent/40 dark:hover:text-accent"
                        >
                            <LuGithub />
                        </a>
                        <a
                            href="mailto:mhaddese@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary/50 scale-150 hover:scale-180 hover:text-primary transition-all duration-300 dark:text-accent/40 dark:hover:text-accent"
                        >
                            <MdOutlineMailOutline />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mohaddese-karimi-b22b5b415/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary/50 scale-150 hover:scale-180 hover:text-primary transition-all duration-300 dark:text-accent/40 dark:hover:text-accent"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* HERO RIGHT SECTION */}

            <div
                dir="ltr"
                className="text-left p-6 max-w-xl rounded-lg border border-primary/20 bg-primary/5 dark:border-accent/10 dark:bg-primary-dark/50"
            >
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-gray-500">developer.js</div>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <div className="text-gray-500 mt-2.5">
                        // Frontend Developer
                    </div>
                    <div className="text-[#DD337F]">
                        const <span className="text-[#2563EB]">developer</span>{' '}
                        <span className="text-black dark:text-gray-500">=</span>{' '}
                        <span className="text=[#FA9753]">{'{'}</span>
                    </div>
                    <div className="text-[#16A34A] text-sm pl-6">
                        name:{' '}
                        <span className="text-[#FA9753]">
                            {" 'Mohaddese Karimi'"}
                        </span>
                    </div>
                    <div className="text-[#16A34A] text-sm pl-6">
                        skills: <span className="text-[#FA9753]">[</span>
                        <span className="text-[#FA9753]">'Git'</span> ,{' '}
                        <span className="text-[#FA9753]">'Html'</span> ,{' '}
                        <span className="text-[#FA9753]">'Css'</span> ,{' '}
                        <span className="text-[#FA9753]">'JavaScript'</span> ,{' '}
                        <span className="text-[#FA9753]">'TypeScript'</span> ,{' '}
                        <span className="text-[#FA9753]">'React'</span> ,{' '}
                        <span className="text-[#FA9753]">'Next.js'</span>{' '}
                        <span className="text-[#FA9753]">]</span> ,{' '}
                    </div>
                    <div className="text-[#16A34A] text-sm pl-6">
                        focuses: <span className="text-[#FA9753]">[</span>
                        <span className="text-[#FA9753]">'Frontend'</span>{' '}
                        <span className="text-[#FA9753]">]</span> ,{' '}
                    </div>
                    <div className="text-[#16A34A] text-sm pl-6">
                        learning:{' '}
                        <span className="text-[#FA9753]">{" 'Always'"}</span>
                    </div>
                    <div className="text-[#16A34A] text-sm pl-6">
                        coffee:{' '}
                        <span className="text-[#FA9753]">{" 'Infinity'"}</span>
                    </div>
                    <div className="text-[#FA9753]">{'}'}</div>
                </div>
            </div>
            {/* </div> */}
        </section>
    );
}
