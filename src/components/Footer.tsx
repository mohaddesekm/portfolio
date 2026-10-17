import { FaChevronUp } from 'react-icons/fa';
import type { Language } from '../locals';
import { en, fa } from '../locals';
import { LuGithub } from 'react-icons/lu';
import { FaLinkedinIn } from 'react-icons/fa6';
import { RiTelegram2Fill } from 'react-icons/ri';
import { MdOutlineMailOutline, MdLocalPhone } from 'react-icons/md';

type FooterProps = {
    language: Language;
};

export default function Footer({ language }: FooterProps) {
    const translations = language === 'en' ? en : fa;

    return (
        <footer dir="ltr" className="relative max-w-2xl mx-auto px-6 py-8">
            <a
                href="#home"
                className="absolute scale-150 p-2 -top-4 right-7 text-primary dark:text-accent bg-accent/80 dark:bg-primary/70 border border-primary/20 dark:border-accent/30 rounded-full cursor-pointer z-50 transition-all duration-300 hover:-translate-y-1"
            >
                <FaChevronUp />
            </a>

            <h2 className="text-2xl font-medium text-center mb-6">
                {translations.footer.name}
            </h2>

            <div>
                <div
                    dir={language === 'en' ? 'ltr' : 'rtl'}
                    className={`${translations === fa && 'f'} text-sm text-center leading-7 text-primary/70 dark:text-accent/70`}
                >
                    {translations.footer.description}
                </div>
            </div>

            <div>
                <div className="flex items-center justify-center gap-6 py-8">
                    <a
                        href="https://github.com/mohaddesekm"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary/50 scale-150 hover:scale-180 hover:text-primary transition-all duration-300 dark:text-accent/40 dark:hover:text-accent"
                    >
                        <LuGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mohaddese-karimi-b22b5b415/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary/50 scale-150 hover:scale-180 hover:text-primary transition-all duration-300 dark:text-accent/40 dark:hover:text-accent"
                    >
                        <FaLinkedinIn />
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
                        href="https://t.me/mohaddesekm"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary/50 scale-150 hover:scale-180 hover:text-primary transition-all duration-300 dark:text-accent/40 dark:hover:text-accent"
                    >
                        <RiTelegram2Fill />
                    </a>

                    <a
                        href="tel:+989012502110"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary/50 scale-150 hover:scale-180 hover:text-primary transition-all duration-300 dark:text-accent/40 dark:hover:text-accent"
                    >
                        <MdLocalPhone />
                    </a>
                </div>
            </div>

            <div className="text-center font-thin leading-7 border-t pt-6 border-secondary/20">
                Built pixel by pixel by Mohaddese ❤️ using TypeScript & Tailwind
                CSS.
            </div>
        </footer>
    );
}
