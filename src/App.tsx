import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import type { Language } from './locals';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

type Theme = 'light' | 'dark';

export default function App() {
    const [theme, setTheme] = useState<Theme>('dark');
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
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
                <Projects language={language} />
                <Skills language={language} />
            </div>
        </main>
    );
}
