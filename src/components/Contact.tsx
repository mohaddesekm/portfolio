import type { Language } from '../locals';
import { en, fa } from '../locals';
import { RiTelegram2Fill } from 'react-icons/ri';
import { LuGithub } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa6';

type ContactProps = {
    language: Language;
};

export default function Contact({ language }: ContactProps) {
    const translations = language === 'en' ? en : fa;

    return (
        <section id="contact" className="scroll-mt-30 pb-10">
            <h3 className="text-3xl font-bold text-primary dark:text-accent sm:text-4xl mb-8">
                {translations.contact.title}
            </h3>

            <div className="text-center group flex h-full flex-col rounded-xl border border-accent/70 bg-accent/5 p-10 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-16">
                    <p className="text-3xl font-bold text-secondary mb-4">
                        {translations.contact.description}
                    </p>
                    <p className="text-xl">
                        {translations.contact.description2}
                    </p>
                </div>
                <div>
                    <p className="mb-4">{translations.contact.contactInfo}</p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a
                            href="mailto:mhaddese@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            // className="flex items-center justify-center gap-2 bg-accent/20 text-primary/70 dark:bg-primary/20 dark:text-accent/30 rounded-full px-4 py-2 cursor-pointer hover:bg-accent/70 transition-all duration-300"
                            className="flex items-center justify-center gap-2 rounded-lg bg-secondary/20 border border-accent/10 px-5 py-3 text-sm font-medium text-primary dark:text-accent transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <span className="scale-150">
                                <MdOutlineMailOutline />
                            </span>
                            <span className="font-normal">
                                mhaddese@gmail.com
                            </span>
                        </a>

                        <a
                            href="https://t.me/mohaddesekm"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 rounded-lg bg-secondary/20 border border-accent/10 px-5 py-3 text-sm font-medium text-primary dark:text-accent transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <span className="scale-150">
                                <RiTelegram2Fill />
                            </span>
                            <span className="font-normal">Telegram</span>
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-6 pt-8">
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
        </section>
    );
}
