import type { Language } from '../locals';
import { en, fa } from '../locals';
import { LuGithub } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa6';
import { motion } from 'motion/react';

type HeroProps = {
    language: Language;
};

export default function Hero({ language }: HeroProps) {
    const translations = language === 'en' ? en : fa;

    const heroContentVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const heroItemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <section
            id="home"
            className={`${translations === en ? 'lg:text-left' : 'lg:text-right'} text-center grid justify-center pt-55 pb-45 gap-12 lg:grid-cols-2`}
        >
            {/* HERO LEFT SECTION */}

            <motion.div
                variants={heroContentVariants}
                initial="hidden"
                animate="visible"
                className="w-full h-full"
            >
                <motion.p
                    variants={heroItemVariants}
                    className="mb-4 text-lg font-medium text-secondary"
                >
                    {language === 'en' && translations.hero.greeting}
                </motion.p>

                <motion.h1
                    variants={heroItemVariants}
                    className="text-center text-4xl font-bold sm:text-6xl"
                >
                    <div className="flex flex-wrap items-center justify-center lg:justify-normal gap-2 text-primary/60 dark:text-accent">
                        {translations.hero.name}

                        <span className="text-primary dark:text-secondary">
                            {translations.hero.family}
                        </span>
                    </div>
                </motion.h1>

                <motion.h2
                    variants={heroItemVariants}
                    className="mt-5 text-xl font-thin text-primary dark:text-accent sm:text-2xl opacity-90"
                >
                    {translations.hero.stack}
                </motion.h2>

                <motion.p
                    variants={heroItemVariants}
                    className="mt-6 text-[14px] leading-7 text-primary/70 dark:text-accent/70 sm:text-lg"
                >
                    {translations.hero.description}
                </motion.p>

                <motion.div
                    variants={heroItemVariants}
                    className="mt-8 flex flex-wrap items-center justify-center lg:justify-normal gap-8"
                >
                    <div className="flex items-center justify-center gap-4">
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
                </motion.div>
            </motion.div>

            {/* HERO RIGHT SECTION */}

            <motion.div
                dir="ltr"
                className="flex flex-col text-left p-6 max-w-xl rounded-lg border border-primary/20 bg-primary/5 dark:border-accent/10 dark:bg-primary-dark/50"
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                    delay: 1,
                }}
            >
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-gray-500">developer.js</div>
                </div>
                <div className="flex flex-col mt-auto gap-2 text-sm">
                    <div className="text-gray-500 mt-2.5">
                        // Frontend Developer
                    </div>
                    <div className="text-[#DD337F]">
                        const <span className="text-[#2563EB]">developer</span>{' '}
                        <span className="text-black dark:text-gray-500">=</span>{' '}
                        <span className="text-[#DD337F]">{'{'}</span>
                    </div>
                    <div className="text-[#16A34A] text-sm pl-6">
                        name:{' '}
                        <span className="text-[#FA9753]">
                            {" 'Mohaddese Karimi'"}
                        </span>{' '}
                        ,
                    </div>
                    <div className="text-[#16A34A] text-sm pl-6">
                        focuses:{' '}
                        <span className="text-[#FA9753]">'Frontend'</span>{' '}
                        ,{' '}
                    </div>
                    <div className="text-[#16A34A] text-sm pl-6">
                        skills: <span className="text-[#DD337F]">[</span>
                        <span className="text-[#FA9753]">'Git'</span> ,{' '}
                        <span className="text-[#FA9753]">'HTML'</span> ,{' '}
                        <span className="text-[#FA9753]">'CSS'</span> ,{' '}
                        <span className="text-[#FA9753]">'JavaScript'</span> ,{' '}
                        <span className="text-[#FA9753]">'React'</span>
                        <span className="text-[#DD337F]">]</span>,
                    </div>
                    <div className="text-[#16A34A] text-sm pl-6">
                        learning: <span className="text-[#DD337F]">[</span>
                        <span className="text-[#FA9753]">
                            'TypeScript'
                        </span> ,{' '}
                        <span className="text-[#FA9753]">'Next.js'</span>{' '}
                        <span className="text-[#DD337F]">]</span> ,{' '}
                    </div>
                    {/* <div className="text-[#16A34A] text-sm pl-6">
                        learning:{' '}
                        <span className="text-[#FA9753]">{" 'Always'"}</span> ,
                    </div> */}
                    <div className="text-[#16A34A] text-sm pl-6">
                        coffee:{' '}
                        <span className="text-[#FA9753]">{" 'Infinity'"}</span>{' '}
                        ,
                    </div>
                    <div className="text-[#DD337F]">{'}'}</div>
                </div>
            </motion.div>
            {/* </div> */}
        </section>
    );
}
