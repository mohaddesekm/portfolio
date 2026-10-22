import type { Language } from '../locals';
import { en, fa } from '../locals';
import { RiTelegram2Fill } from 'react-icons/ri';
import { MdLocalPhone, MdOutlineMailOutline } from 'react-icons/md';
import ScrollReveal from './ScrollReveal';

type ContactProps = {
    language: Language;
};

export default function Contact({ language }: ContactProps) {
    const translations = language === 'en' ? en : fa;

    return (
        <section id="contact" className="scroll-mt-30 pb-10">
            <ScrollReveal>
                <h2 className="text-3xl font-bold text-primary dark:text-accent sm:text-4xl mb-8">
                    {translations.contact.title}
                </h2>
            </ScrollReveal>

            <div className="text-center group flex h-full flex-col rounded-xl border border-accent/70 bg-accent/5 p-10 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <ScrollReveal>
                        <p className="text-2xl font-bold text-secondary mb-4">
                            {translations.contact.description}
                        </p>
                    </ScrollReveal>
                    <ScrollReveal>
                        <p className='text-primary/70 dark:text-accent/70'>{translations.contact.description2}</p>
                    </ScrollReveal>
                </div>
                <div dir="ltr">
                    <ScrollReveal>
                        <p className="mb-4">
                            {translations.contact.contactInfo}
                        </p>
                    </ScrollReveal>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <ScrollReveal>
                            <a
                                href="tel:+989012502110"
                                className="flex items-center justify-center gap-2 rounded-lg bg-secondary/20 border border-accent/10 px-5 py-3 text-sm font-medium text-primary dark:text-accent transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <span className="scale-150">
                                    <MdLocalPhone />
                                </span>
                                <span className="font-normal">
                                    +98 901 250 2110
                                </span>
                            </a>
                        </ScrollReveal>

                        <ScrollReveal>
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
                        </ScrollReveal>

                        <ScrollReveal>
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
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
