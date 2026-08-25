import { useState, type Dispatch, type SetStateAction } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import type { Language } from '../locals';
import { en, fa } from '../locals';

type NavItem = {
    label: string;
    href: string;
};

type Theme = 'light' | 'dark';

type NavbarProps = {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
    language: Language;
    setLanguage: Dispatch<SetStateAction<Language>>;
};

export default function Navbar({
    theme,
    setTheme,
    language,
    setLanguage,
}: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const translations = language === 'en' ? en : fa;

    const navItems: NavItem[] = [
        { label: translations.nav.home, href: '#home' },
        { label: translations.nav.about, href: '#about' },
        { label: translations.nav.projects, href: '#projects' },
        { label: translations.nav.skills, href: '#skills' },
        { label: translations.nav.contact, href: '#contact' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full border-b border-primary/20 bg-white-90 backdrop-blur-md dark:bg-primary-dark/90 dark:border-primary/30">
                <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 h-20 max-w-7xl lg:px-8">
                    {/* LOGO */}
                    <a
                        href="#home"
                        className="text-2xl font-bold text-primary dark:text-accent transition-colors"
                        dir="ltr"
                    >
                        KM.
                    </a>

                    {/* Navigation */}

                    <ul className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="text-sm font-medium text-primary dark:text-accent transition-colors duration-300 hover:text-secondary"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center justify-center gap-5">
                        <button
                            type="button"
                            className="rounded-lg p-2 text-sm font-medium text-primary dark:text-accent transition-colors hover:bg-secondary/10 dark:hover:bg-primary outline-0 cursor-pointer"
                            onClick={() =>
                                setTheme((prev) =>
                                    prev === 'dark' ? 'light' : 'dark',
                                )
                            }
                        >
                            <span className="relative block size-5">
                                <Sun
                                    size={20}
                                    className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                                        theme === 'dark'
                                            ? 'rotate-0 opacity-100'
                                            : 'rotate-180 opacity-0'
                                    }`}
                                />

                                <Moon
                                    size={20}
                                    className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                                        theme === 'dark'
                                            ? 'rotate-180 opacity-0'
                                            : 'rotate-0 opacity-100'
                                    }`}
                                />
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setLanguage((prev) =>
                                    prev === 'en' ? 'fa' : 'en',
                                )
                            }
                            className="cursor-pointer rounded-lg border border-secondary/50 px-3 py-2 text-sm font-medium text-primary-dark transition-colors duration-300 hover:bg-primary/10 hover:text-secondary dark:text-accent dark:hover:bg-primary outline-0"
                        >
                            {language === 'en' ? 'FA' : 'EN'}
                        </button>

                        <button
                            type="button"
                            className="md:hidden cursor-pointer transition-colors hover:text-secondary"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </header>
            <div
                className={`fixed w-full overflow-hidden transition-all duration-300 md:hidden bg-light-bg dark:bg-primary-dark shadow-lg shadow-primary-dark/15 dark:shadow-black/40 rounded-b-2xl z-40 ${isMenuOpen ? 'max-h-96 opacity-100 top-20' : 'max-h-0 opacity-0 -top-full'}`}
            >
                <nav className="flex flex-col my-3">
                    <ul>
                        {navItems.map((item) => (
                            <li
                                key={item.href}
                                className="h-10 transition-all duration-200 hover:bg-primary/10 dark:hover:bg-primary/30 text-primary dark:text-accent hover:text-secondary"
                            >
                                <a
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-sm font-medium px-6 h-full content-center"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
