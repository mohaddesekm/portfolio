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
                        className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-accent transition-all hover:scale-105"
                    >
                        {translations.hero.projectsButton}
                    </a>

                    <a
                        href="#contact"
                        className="rounded-lg border border-secondary px-5 py-3 text-sm font-medium text-primary transition-all hover:bg-secondary/10 dark:text-accent hover:scale-105"
                    >
                        {translations.hero.contactButton}
                    </a>
                </div>
            </div>

            {/* <div className=" lg:h-full items-center justify-center"> */}
            <div className="p-6 max-w-xl rounded-lg border border-primary/20 bg-primary/5 dark:border-accent/10 dark:bg-primary-dark/50">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-gray-500">developer.js</div>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <div className="text-gray-500">// Frontend Developer</div>
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
                        <span className="text-[#FA9753]">'Next.Js'</span>{' '}
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
