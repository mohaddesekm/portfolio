import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import type { Language } from './locals';

type Theme = 'light' | 'dark';

export default function App() {
    const [theme, setTheme] = useState<Theme>('dark');
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr;';
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
                <section
                    id="home"
                    className="flex min-h-screen items-center justify-center"
                >
                    <h1 className="text-5xl font-bold">My Portfolio</h1>
                </section>
            </div>
        </main>
    );
}
