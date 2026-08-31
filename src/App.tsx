import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import type { Language } from './locals';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Theme = 'light' | 'dark';

export default function App() {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }
        return 'dark';
    });

    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');

        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    return (
        <main className="min-h-screen bg-light-bg text-primary dark:bg-primary-dark dark:text-accent">
            <Navbar
                theme={theme}
                setTheme={setTheme}
                language={language}
                setLanguage={setLanguage}
            />

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <Hero language={language} />
                <About language={language} />
                <Skills language={language} />
                <Projects language={language} />
                <Contact language={language} />
            </div>

            <div className="mx-auto w-full border-t border-primary/20 dark:border-primary/30 bg-accent/15 dark:bg-accent/5 mt-8">
                <Footer />
            </div>
        </main>
    );
}
